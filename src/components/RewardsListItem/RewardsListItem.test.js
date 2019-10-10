import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import RewardsListItem from './RewardsListItem'

describe('Rewards List Item Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<RewardsListItem />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<RewardsListItem />).toJSON();
        expect(tree).toMatchSnapshot()
    })

    it('renders to UI as expected with PROPS', () => {
        const tree = renderer.create(<RewardsListItem button={true} currentPoints={250} pointsRequired={125} discount={'$25 Off'} onClickReward={() => { }} updated={0} />).toJSON();
        expect(tree).toMatchSnapshot()
    })

})