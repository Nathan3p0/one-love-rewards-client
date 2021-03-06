import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import WelcomeUser from './WelcomeUser'

describe('Welcome user Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<WelcomeUser />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<WelcomeUser />).toJSON();
        expect(tree).toMatchSnapshot()
    })

    it('renders to UI as expected with PROPS', () => {
        const tree = renderer.create(<WelcomeUser
            name={'Nathan'}
            rank={'Gold'}
        />).toJSON();
        expect(tree).toMatchSnapshot()
    })

})