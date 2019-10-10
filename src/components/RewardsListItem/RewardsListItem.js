import React from 'react'
import './RewardsListItem.css'

const RewardsListItem = (props) => {
    return (
        <li>
            <div className="user__content-rewards--item">
                {props.button ?
                    <button onClick={(e) => props.onClickReward(props, e)} className={props.updated >= props.pointsRequired ? "user__content-rewards--points user__content-rewards--earned" : "user__content-rewards--points"}>
                        <p>{props.pointsRequired}pts</p>
                    </button> :
                    <div className={props.points >= props.pointsRequired ? "user__content-rewards--points user__content-rewards--earned" : "user__content-rewards--points"}>
                        <p>{props.pointsRequired}pts</p>
                    </div>
                }
                <div className="user__content-rewards--reward">
                    <p>{props.discount}</p>
                </div>
            </div>
        </li>
    )
}

RewardsListItem.defaultProps = {
    button: true,
    currentPoints: 0,
    pointsRequired: 0,
    updated: 0,
    discount: '',
    onClickReward: () => { }
}

export default RewardsListItem