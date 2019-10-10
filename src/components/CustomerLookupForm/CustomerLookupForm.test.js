import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import CustomerLookupForm from './CustomerLookupForm'

describe('Customer lookup form Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<CustomerLookupForm />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<CustomerLookupForm />).toJSON();
        expect(tree).toMatchSnapshot()
    })

    it('renders to UI as expected with PROPS', () => {
        const tree = renderer.create(<CustomerLookupForm
            handlePhoneSubmit={() => { }}
            handleInputChange={() => { }}
            phone={'734-673-5101'}
            error={{ routine: 'error' }}
        />).toJSON();
        expect(tree).toMatchSnapshot()
    })

})