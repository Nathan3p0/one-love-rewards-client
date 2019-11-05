import React, { Component } from 'react'
import WelcomeUser from '../../components/WelcomeUser/WelcomeUser'
import UserPoints from '../../components/UserPoints/UserPoints'
import RewardsList from '../../components/RewardsList/RewardsList'
import DashboardApiService from '../../services/dashboard-api-services'
import CustomerApiService from '../../services/customer-api-service'
import './RewardsDisplay.css'

class RewardsDisplay extends Component {

    state = {
        rewards: [],
        error: null,
        customerId: this.props.match.params.id,
        points: null,
        name: '',
        percentage: null
    }

    componentDidMount() {
        this.fetchRewards()
        this.fetchCustomerById(this.state.customerId)
    }

    updatePercentage = () => {
        if (this.state.required.length === 0) {
            this.setState({
                percentage: 1
            })
        } else {
            this.setState({
                percentage: this.state.points / this.state.required[0].points_required
            })
        }
    }

    fetchRewards = () => {
        DashboardApiService.getRewards()
            .then(res => {
                this.setState({
                    rewards: [...res]
                })
            })
            .catch(error => {
                this.setState({ error })
            })
    }

    fetchCustomerById = (id) => {
        CustomerApiService.getCustomerRewardsById(id)
            .then(res => {
                this.setState({
                    name: res.name,
                    points: res.points_total,
                    required: res.points_required
                })
                this.updatePercentage()
            })
            .catch(error => {
                this.setState({ error })
            })
    }

    render() {
        const { name, points, rewards, percentage } = this.state
        const rank = ['Elite', 'Platinum', 'Gold', 'Silver']
        let customerRank
        if (points < 100) {
            customerRank = rank[3]
        } else if (points < 250) {
            customerRank = rank[2]
        } else if (points < 500) {
            customerRank = rank[1]
        } else (
            customerRank = rank[0]
        )

        return (
            <main className="user__content">
                <section className="user__content-info">
                    <div>
                        <WelcomeUser name={name} rank={customerRank} />
                        <UserPoints points={points} percentage={percentage} rewards={rewards} />
                    </div>
                </section>
                <section className="user__content-rewards">
                    <RewardsList button={false} points={points} rewards={rewards} />
                    <button className="logout-btn" onClick={() => { this.props.history.push('/') }}>Log out</button>
                </section>
            </main>
        )
    }
}

export default RewardsDisplay