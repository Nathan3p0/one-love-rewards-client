import React, { Component } from 'react'
import DeleteMemberForm from '../../components/DeleteMemberForm/DeleteMemberForm'
import DashboardApiService from '../../services/dashboard-api-services'
import './DeleteMember.css'


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

        console.log(newCustomer)

        DashboardApiService.createNewCustomer(newCustomer)
            .then(res => {
                this.handlePostSuccess()
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
        const destination = (location.state || {}).from || '/dashboard'
        history.push(destination)
    }

    render() {
        return (
            <section className="dashboard__delete-member">
                <DeleteMemberForm handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} error={this.state.error} />
            </section>
        )
    }
}

export default AddMember