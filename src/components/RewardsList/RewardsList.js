import React from 'react'
import './RewardsList.css'
import RewardsListItem from '../RewardsListItem/RewardsListItem'

const RewardsList = (props) => {

    const rewardsItems = props.rewards.map((item, i) =>
        <RewardsListItem key={i} pointsRequired={item.points_required} points={props.points} discount={item.discount} button={props.button} />
    )

    return (

        <>
            <h3>Current Rewards Available:</h3>
            <ul>
                {rewardsItems}
            </ul>
        </>
    )
}

export default RewardsList;