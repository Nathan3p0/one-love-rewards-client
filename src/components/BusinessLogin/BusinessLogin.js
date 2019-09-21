import React from 'react'
import './BusinessLogin.css'

const BusinessLogin = (props) => {
    return (
        <section className="main__content-business_login">
            <div>
                <form className="businessLoginForm">

                    <h2>Business Owner Login</h2>
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

export default BusinessLogin