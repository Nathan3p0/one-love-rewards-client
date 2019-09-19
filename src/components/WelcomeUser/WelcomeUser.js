import React from 'react'
import './WelcomeUser.css'

const WelcomeUser = (props) => {
    const initial = props.name.split('').shift()

    return (
        <section className="user__content-info--welcome">
            <div className="user__content-info--welcome-user">
                <div>
                    <p>Welcome {props.name}!</p>
                    <p>Rank <span>{props.rank}</span></p>
                </div>
            </div>
            <div className="user__content-info--welcome-initial">
                <p className="user__content-info--welcome-circle">{initial}</p>
            </div>
        </section>
    )
}

export default WelcomeUser