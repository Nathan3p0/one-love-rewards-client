import React from 'react'
import { Link } from 'react-router-dom'

const DeleteMemberForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="dashboard__add-member--form">
            <h2>Delete Rewards Member</h2>
            <div>
                <label htmlFor="customer-phone">Customer Phone Number:</label>
                <br />
                <input type="tel" id="customer-phone" name="phone_number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={props.handleInputChange}
                    placeholder="734-555-0909" required />
            </div>
            <button type="submit" className="create-btn" >Delete User</button>
            <Link to='/dashboard'><button className="go-back-btn">Go Back</button></Link>
        </form>
    )
}

export default DeleteMemberForm