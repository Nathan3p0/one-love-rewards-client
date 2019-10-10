import React, { Component } from 'react'
import './RestaurantDashboard.css'
import DashboardNav from '../../components/DashboardNav/DashboardNav'
import { Route, Switch } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AddPoints from '../AddPoints/AddPoints'
import EditRewards from '../EditRewards/EditRewards'
import AddMember from '../AddMember/AddMember'
import AllMembers from '../AllMembers/AllMembers'
import DeleteMember from '../DeleteMember/DeleteMember'
import TokenService from '../../services/token-service'

class RestaurantDashboard extends Component {
    state = {
        members: [],
        navOpen: false
    }

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    toggleNavigation = () => {
        this.setState({
            navOpen: !this.state.navOpen
        })
    }

    render() {
        return (
            <section className='dashboard'>
                <div>
                    <button onClick={this.toggleNavigation} className='dashboard__menu-title'> Kingston Kitchen <FontAwesomeIcon icon='bars' /></button>
                    {(this.state.navOpen && <DashboardNav toggleNav={this.toggleNavigation} handleLogout={this.handleLogoutClick} />)}
                </div>
                <div>
                    <Switch>
                        <Route path={'/dashboard/add-points'} component={AddPoints} />
                        <Route path={'/dashboard/edit-rewards'} component={EditRewards} />
                        <Route path={'/dashboard/add-member'} component={AddMember} />
                        <Route path={'/dashboard/members'} component={AllMembers} />
                        <Route path={'/dashboard/delete-member'} component={DeleteMember} />
                    </Switch>
                </div>
            </section>
        )
    }
}

export default RestaurantDashboard