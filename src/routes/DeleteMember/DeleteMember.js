import React, { Component } from 'react'
import DeleteMemberForm from '../../components/DeleteMemberForm/DeleteMemberForm'
import DashboardApiService from '../../services/dashboard-api-services'
import './DeleteMember.css'


class AddMember extends Component {
    state = {
        phone_number: '',
        error: null
    }

    handleSubmit = e => {
        e.preventDefault()
        DashboardApiService.deleteCustomer(this.state.phone_number)
            .then(res => {
                this.props.history.push(`/dashboard/members`);
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
            <section className="dashboard__delete-member">
                <DeleteMemberForm handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} error={this.state.error} />
            </section>
        )
    }
}

export default AddMember