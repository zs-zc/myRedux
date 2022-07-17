import React, { Component } from 'react'

export default class App extends Component {
    state = {
        count: 0
    }
    increment = () => {
        const { value } = this.selectNum
        const { count } = this.state
        this.setState({ count: count + value * 1 })
    }
    deIncrement = () => {
        const { value } = this.selectNum
        const { count } = this.state
        this.setState({ count: count - value * 1 })
    }
    incrementIfOdd = () => {
        const { value } = this.selectNum
        const { count } = this.state
        if (count % 2 !== 0) {
            this.setState({ count: count + value * 1 })

        }
    }
    incrementAsync = () => {
        const { value } = this.selectNum
        const { count } = this.state
        setTimeout(() => {
            this.setState({ count: count + value * 1 })
        }, 500)
    }
    render() {
        return (
            <div>
                <h2>当前求和值为 ：{this.state.count}</h2>
                <select ref={c => this.selectNum = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.deIncrement}>-</button>
                <button onClick={this.incrementIfOdd}>当前求和为基数+</button>
                <button onClick={this.incrementAsync}>异步+</button>
            </div>
        )
    }
}
