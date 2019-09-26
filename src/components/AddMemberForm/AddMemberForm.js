import React from 'react'
import { Link } from 'react-router-dom'

const AddMemberForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="dashboard__add-member--form">
            <h2>Add New Member</h2>
            <div role='alert'>
                {props.error && <p className='red'>{props.error.detail}</p>}
            </div>
            <div>
                <label htmlFor="name">Customer Name:</label>
                <br />
                <input type="text" id="name" name="name" placeholder="Full Name" onChange={props.handleInputChange} required />
            </div>
            <div>
                <label htmlFor="email">Customer Email:</label>
                <br />
                <input type="email" id="email" name="email" placeholder="Email" onChange={props.handleInputChange} required />
            </div>
            <div>
                <label htmlFor="customer-phone">Customer Phone Number:</label>
                <br />
                <input type="tel" id="customer-phone" name="phone_number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={props.handleInputChange}
                    placeholder="734-555-0909" required />
            </div>
            <button type="submit" className="create-btn" >Create User</button>
            <Link to='/dashboard'><button className="go-back-btn">Go Back</button></Link>
        </form>
    )
}

export default AddMemberForm