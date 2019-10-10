import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import DashboardNav from './DashboardNav'
import { BrowserRouter } from 'react-router-dom'

describe('Dashboard Nav Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<BrowserRouter><DashboardNav /></BrowserRouter>, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<BrowserRouter><DashboardNav /></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot()
    })

    it('renders to UI as expected with PROPS', () => {
        const tree = renderer.create(<BrowserRouter><DashboardNav
            handleLogout={() => { }}
            toggleNav={() => { }}
        /></BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot()
    })

})