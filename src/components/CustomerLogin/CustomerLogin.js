import React, { Component } from 'react'
import CustomerApiService from '../../services/customer-api-service'
import './CustomerLogin.css'

class CustomerLogin extends Component {
    static defaultProps = {
        onSearchSuccess: () => { }
    }

    state = {
        error: null,
        phone_number: '',
        id: null
    }

    handlePhoneSubmit = e => {
        e.preventDefault()
        const { phone_number } = this.state
        CustomerApiService.getCustomerInfoByPhone(phone_number)
            .then(res => {
                this.setState({
                    phone_number: ''
                })
                this.props.onSearchSuccess(res.id)
            })
            .catch(error => {
                console.log(error)
                this.setState({ error: error.message })
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

    render() {
        const { error } = this.state
        return (
            <section className="main__content-user_lookup">
                <div className='cover'>
                    <form onSubmit={this.handlePhoneSubmit} className="customerLoginForm">
                        <h2>View What Rewards You've Earned</h2>
                        <div role='alert'>
                            {error && <p className='red'>{error}</p>}
                        </div>
                        <div>
                            <label htmlFor="phone">Enter your phone number:</label>
                            <input type="text" id="phone" name="phone_number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                placeholder="734-555-0505" value={this.state.phone_number} onChange={this.handleInputChange} required />
                        </div>
                        <div>
                            <button className="cust-btn" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}
export default CustomerLogin