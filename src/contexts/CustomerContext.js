import React, { Component } from 'react'

const CustomerContext = React.createContext({
    id: null,
    error: null,
    setId: () => { }
})

export default CustomerContext

export class CustomerProvider extends Component {
    state = {
        error: null,
        id: null
    }

    setId = res => {
        this.setState({ id: res })
    }
    render() {
        const value = {
            id: this.state.id,
            error: this.state.error,
            setId: (res) => this.setId(res)

        }
        return (
            <CustomerContext.Provider value={value}>
                {this.props.children}
            </CustomerContext.Provider>
        )
    }
}

