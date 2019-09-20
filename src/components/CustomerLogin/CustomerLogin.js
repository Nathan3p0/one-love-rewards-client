import React, { Component } from 'react'
import './CustomerLogin.css'

class CustomerLogin extends Component {
    static defaultProps = {
        onSearchSuccess: () => { }
    }

    state = {
        error: null
    }

    handlePhoneSubmit = (e) => {
        e.preventDefault()
        console.log('I am working')

        this.props.onSearchSuccess()
    }

    render() {
        return (
            <section className="main__content-user_lookup">
                <div className='cover'>
                    <h2>View What Rewards You've Earned</h2>
                    <form onSubmit={this.handlePhoneSubmit} className="customerLoginForm">
                        <div>
                            <label htmlFor="phone">Enter your phone number:</label>
                            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                placeholder="123-456-7890" required />
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