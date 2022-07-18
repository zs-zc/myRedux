import React, { Component } from 'react'
import Count from "../src/containers/count"
import Person from './containers/Person'
import store from "../src/redux/store"
export default class App extends Component {
    render() {
        return (
            <div>
                <Count store={store} />
                <hr />
                <Person />
            </div>
        )
    }
}
