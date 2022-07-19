import { Increment, Decrement, IncrementAsync } from "../../redux/actions/count"
import React, { Component } from 'react'
import { connect } from "react-redux"
// function mapStateToProps(state) {
//     return { count: state }
// }
// function mapDispatchToProps(dispatch) {
//     return {
//         increment: (data) => {
//             dispatch(createIncrementAction(data))
//         },
//         decrement: (data) => {
//             dispatch(createDecrementAction(data))
//         },
//         incrementAsync: (data, time) => {
//             dispatch(createIncrementAsyncAction(data, time))
//         }

//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(CountUI)

class Count extends Component {
    increment = () => {
        const { value } = this.selectNum
        this.props.increment(value * 1)
    }
    decrement = () => {
        const { value } = this.selectNum
        this.props.decrement(value * 1)
    }


    incrementIfOdd = () => {
        const { value } = this.selectNum
        if (this.props.count % 2 !== 0) {
            this.props.increment(value * 1)
        }

    }
    incrementAsync = () => {
        const { value } = this.selectNum
        this.props.incrementAsync(value * 1, 1000)
    }


    render() {
        return (
            <div>
                <h2>当前求和值为 :{this.props.count},下方总人数：{this.props.personTotal}</h2>
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



export default connect(state => ({ count: state.count, personTotal: state.persons.length }), {
    increment: Increment,
    decrement: Decrement,
    incrementAsync: IncrementAsync
})(Count)