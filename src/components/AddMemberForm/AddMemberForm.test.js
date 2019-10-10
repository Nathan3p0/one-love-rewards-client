import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import AddMemberForm from './AddMemberForm'

describe('Add Points Form Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<AddMemberForm />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<AddMemberForm />).toJSON();
        expect(tree).toMatchSnapshot()
    })

    it('renders to UI as expected with PROPS', () => {
        const tree = renderer.create(<AddMemberForm
            error={'error'}
            handleInputChange={() => {}}
            handleSubmit={() => {}}
             />).toJSON();
        expect(tree).toMatchSnapshot()
    })

})