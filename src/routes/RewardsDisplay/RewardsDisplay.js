import React from 'react'
import WelcomeUser from '../../components/WelcomeUser/WelcomeUser'
import UserPoints from '../../components/UserPoints/UserPoints'
import RewardsList from '../../components/RewardsList/RewardsList'

const RewardsDisplay = () => {
    return (
        <main className="user__content">
            <section className="user__content-info">
                <div>
                    <WelcomeUser name={'Nathan'} rank={'Bronze'} />
                    <UserPoints points={230} percentage={50} />
                </div>
            </section>
            <section className="user__content-rewards">
                <RewardsList />
            </section>
        </main>
    )
}

export default RewardsDisplay