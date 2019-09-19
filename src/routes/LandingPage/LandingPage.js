import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
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
                {customerLogin && <CustomerLogin />}
                {businessLogin && <BusinessLogin />}
            </main>
        )
    }
}

export default LandingPage;