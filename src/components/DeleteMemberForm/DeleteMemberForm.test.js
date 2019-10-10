import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import DeleteMemberForm from './DeleteMemberForm'

describe('Member List Item Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<DeleteMemberForm />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<DeleteMemberForm />).toJSON();
        expect(tree).toMatchSnapshot()
    })

    it('renders to UI as expected with PROPS', () => {
        const tree = renderer.create(<DeleteMemberForm
            handleSubmit={() => { }}
            handleInputChange={() => { }}
        />).toJSON();
        expect(tree).toMatchSnapshot()
    })

})