import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import UserPoints from './UserPoints'

describe('User Points Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<UserPoints />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<UserPoints />).toJSON();
        expect(tree).toMatchSnapshot()
    })

    it('renders to UI as expected with PROPS', () => {
        const tree = renderer.create(<UserPoints points={12} percentage={50} rewards={[]} />).toJSON();
        expect(tree).toMatchSnapshot()
    })

})