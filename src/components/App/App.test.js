import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

describe('App Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<BrowserRouter><App /></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot()
    })
})