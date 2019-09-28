import React from 'react'
import './RewardsListItem.css'

const RewardsListItem = (props) => {

    return (
        <li>
            <div className="user__content-rewards--item">
                <button onClick={(e) => props.onClickReward(props, e)} className={props.updated >= props.pointsRequired ? "user__content-rewards--points user__content-rewards--earned" : "user__content-rewards--points"}>
                    <p>{props.pointsRequired}pts</p>
                </button>
                <div className="user__content-rewards--reward">
                    <p>{props.discount}</p>
                </div>
            </div>
        </li>
    )
}

export default RewardsListItem