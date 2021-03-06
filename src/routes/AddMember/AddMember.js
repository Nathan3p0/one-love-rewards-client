import React, { Component } from 'react'
import AddMemberForm from '../../components/AddMemberForm/AddMemberForm'
import DashboardApiService from '../../services/dashboard-api-services'
import './AddMember.css'


class AddMember extends Component {
    state = {
        name: '',
        email: '',
        phone_number: '',
        error: null
    }

    handleSubmit = e => {
        e.preventDefault()

        const newCustomer = {
            name: this.state.name,
            email: this.state.email,
            phone_number: this.state.phone_number
        }

        DashboardApiService.createNewCustomer(newCustomer)
            .then(res => {

                const newCustomerPoints = {
                    customer_id: res.id
                }

                DashboardApiService.createInitialPoints(newCustomerPoints)
                    .then(res => {
                        this.props.history.push(`/dashboard/add-points/${res.id}`);
                    })
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    handleInputChange = e => {
        const target = e.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        })

    }

    handlePostSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/dashboard/members'
        history.push(destination)
    }

    render() {
        return (
            <section className="dashboard__add-member">
                <AddMemberForm handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} error={this.state.error} />
            </section>
        )
    }
}

export default AddMember