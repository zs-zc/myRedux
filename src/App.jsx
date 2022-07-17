import React, { Component } from 'react'
import Count from "../src/containers/count"
import store from "../src/redux/store"
export default class App extends Component {
    render() {
        return (
            <div>
                <Count store={store} />
            </div>
        )
    }
}
