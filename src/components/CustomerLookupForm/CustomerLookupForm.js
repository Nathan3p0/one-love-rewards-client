import React from 'react'
import './CustomerLookupForm.css'

const CustomerLookupForm = (props) => {
    return (
        <form onSubmit={props.handlePhoneSubmit} className="dashboard__user-lookup--form">
            <h2>Search for Customer</h2>
            <div role='alert'>
                {props.error && <p className='red'>{props.error.routine}</p>}
            </div>
            <div>
                <label htmlFor="phone">Enter Customer Phone Number:</label>
                <br />
                <input type="text" id="phone" name="phone_number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="Phone Number" onChange={props.handleInputChange} value={props.phone} required />
            </div>
            <div>
                <button className="cust-btn" type="submit">Search</button>
            </div>
        </form>
    )
}

CustomerLookupForm.defaultProps = {
    handlePhoneSubmit: () => { },
    handleInputChange: () => { },
    phone: '734-673-5101',
    error: {
        routine: 'error'
    }
}

export default CustomerLookupForm