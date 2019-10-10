import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import RewardsList from './RewardsList'

describe('Rewards List Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<RewardsList />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<RewardsList />).toJSON();
        expect(tree).toMatchSnapshot()
    })

    it('renders to UI as expected with PROPS', () => {
        const tree = renderer.create(<RewardsList
            pointsRequired={150}
            points={225}
            discount={'$5 off'}
            button={true}
        />).toJSON();
        expect(tree).toMatchSnapshot()
    })

})