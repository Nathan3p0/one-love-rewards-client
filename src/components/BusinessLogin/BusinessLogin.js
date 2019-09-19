import React from 'react'
import './BusinessLogin.css'

const BusinessLogin = (props) => {
    return (
        <section className="main__content-business_login">
            <div>
                <h2>Business Owner Login</h2>
                <form>
                    <label htmlFor="username">Username:</label>
                    <input type='text' id="username" name="username" placeholder="username" required />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="password" required />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default BusinessLogin