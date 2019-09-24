import React, { Component } from 'react'
import './BusinessLogin.css'
import AuthApiService from '../../services/auth-api-service'
import TokenService from '../../services/token-service'

class BusinessLogin extends Component {
    state = {
        error: null
    }

    handleSubmitJwtAuth = e => {
        e.preventDefault()
        this.setState({ error: null })
        const { username, password } = e.target

        AuthApiService.postLogin({
            username: username.value,
            password: password.value
        })
            .then(res => {
                username.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.props.onLoginSuccess()
            })
            .catch(
                res => {
                    this.setState({ error: res.error })
                }
            )
    }

    render() {
        const { error } = this.state

        return (
            <section className="main__content-business_login">
                <div>
                    <form onSubmit={this.handleSubmitJwtAuth} className="businessLoginForm">

                        <h2>Business Owner Login</h2>
                        <div role='alert'>
                            {error && <p className='red'>{error}</p>}
                        </div>
                        <div>
                            <label htmlFor="username">Username:</label>
                            <br />
                            <input type='text' id="username" name="username" placeholder="username" required />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <br />
                            <input type="password" id="password" name="password" placeholder="password" required />
                        </div>
                        <button type="submit" className="biz-btn">Submit</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default BusinessLogin