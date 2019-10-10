import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Intro from './Intro'

describe('Intro Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Intro />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<Intro />).toJSON();
        expect(tree).toMatchSnapshot()
    })

    it('renders to UI as expected with PROPS', () => {
        const tree = renderer.create(<Intro
            handleBusinessLoginToggle={() => { }}
            handleCustomerLoginToggle={() => { }}
        />).toJSON();
        expect(tree).toMatchSnapshot()
    })

})