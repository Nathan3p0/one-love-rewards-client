import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import AddPointsForm from './AddPointsForm'

describe('Add Points Form Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<AddPointsForm />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<AddPointsForm />).toJSON();
        expect(tree).toMatchSnapshot()
    })

    it('renders to UI as expected with PROPS', () => {
        const tree = renderer.create(<AddPointsForm
            points={0}
            id={12}
            handleInputChange={() => {}}
            purchase={12}
            updated={24}
            name={'Nathan'}
            email={'nszelag@live.com'}
            phone={'734\'673\'5101'}
            handlePointsSubmit={() => {}}
            fetchRewards={() => {}}
            rewards={[]}
            error={'error'}
            onClickReward={() => {}}
            selected={'$5 Off'} />).toJSON();
        expect(tree).toMatchSnapshot()
    })

})