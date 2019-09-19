import React from 'react'
import './RewardsList.css'

const RewardsList = (props) => {
    return (
        <>
            <h3>Current Rewards Available:</h3>
            <ul>
                <li>
                    <div className="user__content-rewards--item">
                        <div className="user__content-rewards--points">
                            <p>100pts</p>
                        </div>
                        <div className="user__content-rewards--reward">
                            <p>$5 off your purchase</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="user__content-rewards--item">
                        <div className="user__content-rewards--points">
                            <p>250pts</p>
                        </div>
                        <div className="user__content-rewards--reward">
                            <p>$10 off your purchase</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="user__content-rewards--item">
                        <div className="user__content-rewards--points">
                            <p>500pts</p>
                        </div>
                        <div className="user__content-rewards--reward">
                            <p>$25 off your purchase</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="user__content-rewards--item">
                        <div className="user__content-rewards--points">
                            <p>1000pts</p>
                        </div>
                        <div className="user__content-rewards--reward">
                            <p>$50 off your purchase</p>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default RewardsList;