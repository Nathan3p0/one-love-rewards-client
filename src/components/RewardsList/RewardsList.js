import React from 'react'
import './RewardsList.css'
import RewardsListItem from '../RewardsListItem/RewardsListItem'

const RewardsList = (props) => {
    const rewardsOptions = [
        {
            points: 100,
            discount: '$5 off your purchase'
        },
        {
            points: 250,
            discount: '$10 off your purchase'
        },
        {
            points: 500,
            discount: '$25 off your purchase'
        }, {
            points: 1000,
            discount: '$50 off your purchase'
        }
    ]

    const rewardsItems = rewardsOptions.map((item, i) =>
        <RewardsListItem key={i} pointsRequired={item.points} discount={item.discount} />
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