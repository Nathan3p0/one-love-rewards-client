import React from 'react'
import './circle.css'
import './UserPoints.css'

const UserPoints = (props) => {
    const graphStyle = `c100 p${Math.floor(props.percentage * 100)} big dark`

    return (
        <section className="user__content-info--graph">
            <h3>Current Point Status:</h3>
            <div className={graphStyle}>
                <span>{Math.floor(props.percentage * 100)}%</span>
                <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                </div>
            </div>
            <div className="points-total">
                <p>{props.points}pts</p>
            </div>
            <p>**Percentage to your next reward**</p>
        </section>
    );
}

UserPoints.defaultProps = {
    rewards: []
}

export default UserPoints;