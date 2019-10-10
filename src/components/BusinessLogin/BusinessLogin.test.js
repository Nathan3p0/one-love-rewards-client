import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import BusinessLogin from './BusinessLogin'

describe('Business Login Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<BusinessLogin />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<BusinessLogin />).toJSON();
        expect(tree).toMatchSnapshot()
    })

    it('renders to UI as expected with PROPS', () => {
        const tree = renderer.create(<BusinessLogin
            onLoginSuccess={() => { }}
        />).toJSON();
        expect(tree).toMatchSnapshot()
    })

})