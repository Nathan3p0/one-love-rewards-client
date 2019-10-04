import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import CustomerLookupForm from '../../components/CustomerLookupForm/CustomerLookupForm'
import AddPointsForm from '../../components/AddPointsForm/AddPointsForm'
import DashboardApiService from '../../services/dashboard-api-services'
import './AddPoints.css'

class AddPoints extends Component {
    state = {
        id: null,
        phone_number: '',
        error: null,
        purchase_total: 0,
        updated_points: null,
        reward_selected: null,
        points_redeemed: null
    }

    handleInputChange = e => {
        const target = e.target
        const value = target.value
        const name = target.name

        this.setState((prevState) => ({
            [name]: value,
            updated_points: (Math.floor(prevState.purchase_total * 2) + prevState.points_total)
        }))

    }

    calculateUpdatedPoints = () => {
        const { points_total, purchase_total } = this.state
        console.log(this.state.updated_points)
        return Math.floor(((purchase_total) * 2) + points_total)
    }

    handlePhoneSubmit = e => {
        e.preventDefault()

        DashboardApiService.getCustomerInfoByPhone(this.state.phone_number)
            .then(res => {
                this.props.history.push(`/dashboard/add-points/${res.id}`);
                this.setState({
                    phone_number: '',
                    id: res.id
                })
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    handlePointsSubmit = e => {
        e.preventDefault()
        const { updated_points, customer_id, point_id } = this.state
        const newPoints = {
            point_id: point_id,
            points_total: updated_points,
            customer_id: customer_id
        }

        DashboardApiService.addCustomerPoints(newPoints, customer_id)
            .then(res => {
                this.setState({
                    points_total: updated_points,
                    purchase_total: 0
                })
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    fetchCustomerPointsInfo = (id) => {
        DashboardApiService.getCustomerPointsInfo(id)
            .then(res => {
                console.log(res)
                this.setState({
                    ...res,
                    updated_points: res.points_total
                })
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    fetchRewards = () => {
        DashboardApiService.getRewards()
            .then(res => {
                this.setState({
                    rewards: [...res]
                })
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    onClickReward = (option, e) => {
        if (this.state.updated_points < option.pointsRequired) {
            return this.setState({
                reward_selected: option.discount,
                points_redeemed: option.pointsRequired,
                updated_points: this.state.updated_points
            })
        } else {
            this.setState({
                reward_selected: option.discount,
                points_redeemed: option.pointsRequired,
                updated_points: this.state.updated_points - option.pointsRequired
            })
        }
    }


    render() {
        return (
            <section className="dashboard__add-points">
                <Switch>
                    <Route exact path={'/dashboard/add-points'} render={() => <CustomerLookupForm phone={this.state.phone_number} handleInputChange={this.handleInputChange} handlePhoneSubmit={this.handlePhoneSubmit} error={this.state.error} />} />
                    <Route path={'/dashboard/add-points/:id'} render={(renderProps) => <AddPointsForm fetchCustomerPointsInfo={this.fetchCustomerPointsInfo}
                        points={this.state.points_total}
                        id={renderProps.match.params.id}
                        handleInputChange={this.handleInputChange}
                        purchase={this.state.purchase_total}
                        updated={this.state.updated_points}
                        name={this.state.name}
                        email={this.state.email}
                        phone={this.state.phone_number}
                        handlePointsSubmit={this.handlePointsSubmit}
                        fetchRewards={this.fetchRewards}
                        rewards={this.state.rewards}
                        error={this.state.error}
                        onClickReward={this.onClickReward}
                        selected={this.state.reward_selected} />}
                    />
                </Switch>
            </section>
        )
    }
}

export default AddPoints