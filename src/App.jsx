import React, { Component } from 'react'
import Count from "../src/containers/count"
import Person from './containers/Person'
export default class App extends Component {
    render() {
        return (
            <div>
                <Count />
                <hr />
                <Person />
            </div>
        )
    }
}
