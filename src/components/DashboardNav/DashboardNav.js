import React from 'react'
import { Link } from 'react-router-dom'

const DashboardNav = () => {
    return (
        <nav className="dashboard__menu">
            <Link to='/dashboard/redeem'>
                <div className="dashboard__menu-option redeem">
                    <p>Redeem Points</p>
                </div>
            </Link>
            <Link to='/dashboard/add-points'>
                <div className="dashboard__menu-option add-points">
                    <p>Add Points</p>
                </div>
            </Link>
            <Link to='/dashboard/edit-rewards'>
                <div className="dashboard__menu-option edit">
                    <p>Edit Rewards</p>
                </div>
            </Link>
            <Link to='/dashboard/add-member'>
                <div className="dashboard__menu-option add-member">
                    <p>Add Member</p>
                </div>
            </Link>
            <Link to='/dashboard/members'>
                <div className="dashboard__menu-option see-all">
                    <p>See All Members</p>
                </div>
            </Link>
            <Link to='/dashboard/delete-member'>
                <div className="dashboard__menu-option delete">
                    <p>Delete Member</p>
                </div>
            </Link>
        </nav>
    )
}

export default DashboardNav