import React from 'react'
import './RewardsListItem.css'

const RewardsListItem = (props) => {
    return (
        <li>
            <div className="user__content-rewards--item">
                <div className="user__content-rewards--points">
                    <p>{props.pointsRequired}pts</p>
                </div>
                <div className="user__content-rewards--reward">
                    <p>{props.discount}</p>
                </div>
            </div>
        </li>
    )
}

export default RewardsListItem