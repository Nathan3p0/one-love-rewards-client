import React from 'react'
import './Description.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Description = () => {
    return (
        <section className="main__content-description">
            <div className="main__content-description--header">
                <h2>How It Works</h2>
            </div>
            <div className="main__content-description--info">
                <div className="main__content-description--info-item">
                    <FontAwesomeIcon icon='receipt' size="6x" className="receipt" />
                    <h3>Dine</h3>
                    <p className="info__item-description--heading">Getting started is easy</p>
                    <p>Whether you visit once a month or every day, we’re always glad to see you. And we want you to
                        enjoy Rewards. Just sign up in store and you'll keep earning rewards on every purchase.</p>
                </div>
                <div className="main__content-description--info-item">
                    <FontAwesomeIcon icon='drumstick-bite' className="chicken" size="6x" />
                    <h3>Eat</h3>
                    <p className="info__item-description--heading">Earn 2 points for every $1</p>
                    <p>For every $1 you spend on food and drinks you'll earn 2 points. There is no limit on how many
                        points
                        you can earn.</p>
                </div>
                <div className="main__content-description--info-item">
                    <FontAwesomeIcon icon='money-bill-alt' className="money" size="6x" />
                    <h3>Get Rewarded</h3>
                    <p className="info__item-description--heading">Use points for free food & more</p>
                    <p>Spend your points on any in restaurant items.</p>
                </div>
            </div>
        </section>
    );
}

export default Description