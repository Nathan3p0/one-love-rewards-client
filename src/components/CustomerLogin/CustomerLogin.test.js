import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import CustomerLogin from './CustomerLogin'

describe('Member List Item Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<CustomerLogin />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<CustomerLogin />).toJSON();
        expect(tree).toMatchSnapshot()
    })

    it('renders to UI as expected with PROPS', () => {
        const tree = renderer.create(<CustomerLogin
            onSearchSuccess={() => { }}
        />).toJSON();
        expect(tree).toMatchSnapshot()
    })

})