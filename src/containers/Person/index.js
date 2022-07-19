import React, { Component } from 'react'
import { nanoid } from "nanoid"
import { connect } from "react-redux"
import { createAddPersonAction } from "../../redux/actions/person"
class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        let personObj = { id: nanoid(), name, age }
        this.props.yiduiren(personObj)
        this.nameNode.value = ""
        this.ageNode.value = ""
    }
    render() {
        return (
            <div>
                <h2>我是Person组件,上方加的数：{this.props.he}</h2>
                <input ref={c => this.nameNode = c} placeholder='输入名字' />
                <input ref={c => this.ageNode = c} placeholder='输入年龄' />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.rens.map(item => {
                            return <li key={item.id}>{item.name}--{item.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default connect(state => ({ rens: state.rens, he: state.he }), {
    yiduiren: createAddPersonAction
})(Person)