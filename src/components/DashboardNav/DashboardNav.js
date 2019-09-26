import React from 'react'
import { NavLink } from 'react-router-dom'
import './DashboardNav.css'

const DashboardNav = () => {
    return (
        <nav role="navigation" className="dashboard__menu">
            <ul>
                <li>
                    <NavLink activeClassName='is-active' to='/dashboard/redeem'>
                        Redeem Points
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='is-active' to='/dashboard/add-points'>
                        Add Points
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='is-active' to='/dashboard/edit-rewards'>
                        Edit Rewards
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='is-active' to='/dashboard/add-member'>
                        Add Member
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='is-active' to='/dashboard/members'>
                        See All Members
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='is-active' to='/dashboard/delete-member'>
                        Delete Member
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default DashboardNav