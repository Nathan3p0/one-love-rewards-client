import React, { Component } from 'react'
import './LandingPage.css'
import Intro from '../../components/Intro/Intro'
import Description from '../../components/Description/Description'
import CustomerLogin from '../../components/CustomerLogin/CustomerLogin'
import BusinessLogin from '../../components/BusinessLogin/BusinessLogin'

class LandingPage extends Component {
    state = {
        description: true,
        customerLogin: false,
        businessLogin: false
    }

    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/dashboard'

        history.push(destination)
    }

    handleSearchSuccess = (res) => {
        console.log(res)
        const { history } = this.props
        history.push(`/rewards/${res}`)
    }



    handleCustomerLoginToggle = () => {
        const { customerLogin } = this.state

        if (!customerLogin) {
            this.setState({
                description: false,
                customerLogin: true,
                businessLogin: false
            })
        }
    }

    handleBusinessLoginToggle = () => {
        const { businessLogin } = this.state

        if (!businessLogin) {
            this.setState({
                description: false,
                customerLogin: false,
                businessLogin: true
            })
        }
    }

    render() {
        const { description, customerLogin, businessLogin } = this.state

        return (
            <main className="main__content">
                <Intro handleBusinessLoginToggle={this.handleBusinessLoginToggle} handleCustomerLoginToggle={this.handleCustomerLoginToggle} />
                {description && <Description />}
                {customerLogin && <CustomerLogin onSearchSuccess={this.handleSearchSuccess} />}
                {businessLogin && <BusinessLogin onLoginSuccess={this.handleLoginSuccess} />}
            </main>
        )
    }
}

export default LandingPage;