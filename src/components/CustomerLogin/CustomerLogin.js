import React from 'react'
import './CustomerLogin.css'

const CustomerLogin = () => {
    return (
        <section className="main__content-user_lookup">
            <div>
                <h2>View What Rewards You've Earned</h2>
                <form>
                    <label htmlFor="phone">Enter your phone number:</label>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="123-456-7890" required />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default CustomerLogin