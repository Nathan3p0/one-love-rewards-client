import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Header from './Header'
import { BrowserRouter } from 'react-router-dom'

describe('Header Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<BrowserRouter><Header /></BrowserRouter>, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<BrowserRouter><Header /></BrowserRouter>).toJSON()
        expect(tree).toMatchSnapshot()
    })
})