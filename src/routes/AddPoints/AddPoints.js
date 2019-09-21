import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CustomerLookupForm from '../../components/CustomerLookupForm/CustomerLookupForm'
import AddPointsForm from '../../components/AddPointsForm/AddPointsForm'
import './AddPoints.css'

const AddPoints = () => {
    return (
        <section className="dashboard__add-points">
            <Switch>
                <Route exact path={'/dashboard/add-points'} component={CustomerLookupForm} />
                <Route path={'/dashboard/add-points/:id'} component={AddPointsForm} />
            </Switch>
        </section>
    )
}

export default AddPoints