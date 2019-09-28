import React, { Component } from 'react'
import styles from './AddPoints.module.css'
import RewardsListItem from '../RewardsListItem/RewardsListItem'

class AddPointsForm extends Component {

    componentDidMount() {
        this.props.fetchCustomerPointsInfo(this.props.id)
        this.props.fetchRewards()
    }

    render() {
        let rewardsItems
        if (this.props.rewards === undefined) {
            rewardsItems = []
        } else {
            rewardsItems = this.props.rewards.map((item, i) =>
        <RewardsListItem key={i} currentPoints={this.props.points} pointsRequired={item.points_required} discount={item.discount} onClickReward={this.props.onClickReward} updated={this.props.updated} />
            )}
        return (
            <section className={styles.points__update}>
                <div className={styles.points__update_totals}>
                    <div className={styles.points__update_current}>
                        <p>{this.props.points}pts</p>
                        <h3>Account Balance</h3>
                    </div>
                    <div className={styles.points__update_new}>
                        <p>{this.props.updated}pts</p>
                        <h3>Updated Balance</h3>
                    </div>
                    <div className={styles.points__update_purchase}>
                        <p>${this.props.purchase}</p>
                        <h3>Today's Purchase</h3>
                    </div>
                </div>
                <div className={styles.points__update_formcontainer}>
                    <div>
                        <div role='alert'>
                            {this.props.error && <p className='red'>{this.props.error}</p>}
                        </div>
                        <p>{this.props.name}</p>
                        <p>{this.props.phone}</p>
                        <p>{this.props.email}</p>
                        {this.props.selected && <h4>{this.props.selected} to be redeemed.</h4>}
                        <form onSubmit={this.props.handlePointsSubmit} className={styles.points__update_form}>
                            <label htmlFor="purchase-total">
                                Purchase Total:
                            </label><br />
                            <input type="number" id="purchase-total" name="purchase_total" value={this.props.purchase} onChange={this.props.handleInputChange} required /><br />
                            <button className={styles.done_btn} type="submit">Done</button>
                        </form>
                    </div>
                    <div className={styles.rewards_list}>
                        <h3>Rewards Available</h3>
                        <ul>
                            {rewardsItems}
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default AddPointsForm