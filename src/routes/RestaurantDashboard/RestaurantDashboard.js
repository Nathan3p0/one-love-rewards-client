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