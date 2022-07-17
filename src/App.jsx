import React, { Component } from 'react'
import store from "../src/redux/store"
import { createIncrementAction, createDecrementAction } from "./redux/count_action"
export default class App extends Component {
    //  原始写法
    // state = {
    //     count: 0
    // }
    // increment = () => {
    //     const { value } = this.selectNum
    //     const { count } = this.state
    //     this.setState({ count: count + value * 1 })
    // }
    // deIncrement = () => {
    //     const { value } = this.selectNum
    //     const { count } = this.state
    //     this.setState({ count: count - value * 1 })
    // }
    // incrementIfOdd = () => {
    //     const { value } = this.selectNum
    //     const { count } = this.state
    //     if (count % 2 !== 0) {
    //         this.setState({ count: count + value * 1 })

    //     }
    // }
    // incrementAsync = () => {
    //     const { value } = this.selectNum
    //     const { count } = this.state
    //     setTimeout(() => {
    //         this.setState({ count: count + value * 1 })
    //     }, 500)
    // }

    // redux的用法
    componentDidMount() {
        store.subscribe(() => {
            this.setState({})
        })
    }

    increment = () => {
        const { value } = this.selectNum
        store.dispatch(createIncrementAction(value * 1))
    }
    decrement = () => {
        const { value } = this.selectNum
        store.dispatch(createDecrementAction(value * 1))
    }


    incrementIfOdd = () => {
        const { value } = this.selectNum
        const count = store.getState()
        if (count % 2 !== 0) {
            store.dispatch(createIncrementAction(value * 1))

        }
    }
    incrementAsync = () => {
        const { value } = this.selectNum
        setTimeout(() => {
            store.dispatch(createIncrementAction(value * 1))
        }, 200)
    }
    render() {
        return (
            <div>
                <h2>当前求和值为 ：{store.getState()}</h2>
                <select ref={c => this.selectNum = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>当前求和为基数+</button>
                <button onClick={this.incrementAsync}>异步+</button>
            </div>
        )
    }
}
