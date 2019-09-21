import React, { Component } from 'react'
import './RestaurantDashboard.css'
import DashboardNav from '../../components/DashboardNav/DashboardNav'
import { Route, Switch } from 'react-router-dom'
import RedeemPoints from '../../components/RedeemPoints/RedeemPoints'
import AddPoints from '../../components/AddPoints/AddPoints'
import EditRewards from '../../components/EditRewards/EditRewards'
import AddMember from '../../components/AddMember/AddMember'
import AllMembers from '../../components/AllMembers/AllMembers'
import DeleteMember from '../../components/DeleteMember/DeleteMember'

class RestaurantDashboard extends Component {
    state = {}
    render() {
        return (
            <>
                <Switch>
                    <Route exact path={'/dashboard'} component={DashboardNav} />
                    <Route path={'/dashboard/redeem'} component={RedeemPoints} />
                    <Route path={'/dashboard/add-points'} component={AddPoints} />
                    <Route path={'/dashboard/edit-rewards'} component={EditRewards} />
                    <Route path={'/dashboard/add-member'} component={AddMember} />
                    <Route path={'/dashboard/members'} component={AllMembers} />
                    <Route path={'/dashboard/delete-member'} component={DeleteMember} />
                </Switch>
            </>
        )
    }
}

export default RestaurantDashboard