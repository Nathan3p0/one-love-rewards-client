import React, { Component } from 'react'
import './RestaurantDashboard.css'
import DashboardNav from '../../components/DashboardNav/DashboardNav'
import { Route, Switch } from 'react-router-dom'
import RedeemPoints from '../RedeemPoints/RedeemPoints'
import AddPoints from '../AddPoints/AddPoints'
import EditRewards from '../EditRewards/EditRewards'
import AddMember from '../AddMember/AddMember'
import AllMembers from '../AllMembers/AllMembers'
import DeleteMember from '../DeleteMember/DeleteMember'

class RestaurantDashboard extends Component {
    state = {
        members: []
    }
    render() {
        return (
            <section className='dashboard'>
                <div>
                    <p className='dashboard__menu-title'>Kingston Kitchen</p>
                    <DashboardNav />
                </div>
                <div>
                    <Switch>
                        <Route path={'/dashboard/redeem'} component={RedeemPoints} />
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