import React from 'react'
import { NavLink } from 'react-router-dom'
import './DashboardNav.css'

const DashboardNav = (props) => {
    return (
        <nav role="navigation" className="dashboard__menu">
            <ul>
                <li>
                    <NavLink activeClassName='is-active' to='/dashboard/add-points' onClick={props.toggleNav}>
                        Add & Redeem Points
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink activeClassName='is-active' to='/dashboard/edit-rewards' onClick={props.toggleNav}>
                        Edit Rewards
                    </NavLink>
                </li> */}
                <li>
                    <NavLink activeClassName='is-active' to='/dashboard/add-member' onClick={props.toggleNav}>
                        Add Member
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='is-active' to='/dashboard/members' onClick={props.toggleNav}>
                        See All Members
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='is-active' to='/dashboard/delete-member' onClick={props.toggleNav}>
                        Delete Member
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={props.handleLogout} to='/'>
                        Logout
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

DashboardNav.defaultProps = {
    handleLogout: () => { },
    toggleNav: () => { }
}

export default DashboardNav