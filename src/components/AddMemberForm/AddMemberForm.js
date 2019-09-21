import React from 'react'
import { Link } from 'react-router-dom'

const AddMemberForm = () => {
    return (
        <form className="dashboard__add-member--form">
            <h2>Add New Member</h2>
            <div>
                <label htmlFor="name">Customer Name:</label>
                <br />
                <input type="text" id="name" name="customer_name" placeholder="Full Name" required />
            </div>
            <div>
                <label htmlFor="email">Customer Email:</label>
                <br />
                <input type="email" id="email" name="customer_email" placeholder="Email" required />
            </div>
            <div>
                <label htmlFor="customer-phone">Customer Phone Number:</label>
                <br />
                <input type="tel" id="customer-phone" name="customer_phone" pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                    placeholder="Phone Number" required />
            </div>
            <button type="submit" className="create-btn" >Create User</button>
            <Link to='/dashboard'><button className="go-back-btn">Go Back</button></Link>
        </form>
    )
}

export default AddMemberForm