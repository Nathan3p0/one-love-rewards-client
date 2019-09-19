import React from 'react'
import './Description.css'

const Description = () => {
    return (
        <section className="main__content-description">
            <div className="main__content-description--header">
                <h3>How It Works</h3>
                <img src="https://www.endoca.com/wp-content/uploads/2019/02/Loyalty-icons-01.png" alt="" />
            </div>
            <div className="main__content-description--info">
                <div>
                    <p>Getting started is easy</p>
                    <p>Whether you visit once a month or every day, we’re always glad to see you. And we want you to
                        enjoy Rewards. Just sign up in store and you'll keep earning rewards on every purchase.</p>
                </div>
                <div>
                    <p>Earn 2 points for every $1</p>
                    <p>For every $1 you spend on food and drinks you'll earn 2 points. There is no limit on how many
                        points
                        you can earn.</p>
                </div>
                <div>
                    <p>Use points for free food & more</p>
                    <p>Spend your points on any in restaurant items.</p>
                </div>
            </div>
        </section>
    );
}

export default Description