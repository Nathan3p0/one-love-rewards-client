import React from 'react'
import largeLogo from './images/large-logo.png'
import './Intro.css'

const Intro = (props) => {
    return (
        <section className="main__content-intro">
            <div className="main__content-intro--container">
                <img src={largeLogo} alt="" className="main__content-intro--logo" />
                <h2>REWARDS MADE EASY</h2>
                <button onClick={props.handleCustomerLoginToggle} className="btn customer__btn">Customer Login</button>
                <button onClick={props.handleBusinessLoginToggle} className="btn business__btn">Business Login</button>
            </div>
        </section>
    )
}

export default Intro