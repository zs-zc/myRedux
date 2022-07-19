import React, { Component } from 'react'

export default class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        console.log(name, age);

    }
    render() {
        return (
            <div>
                <h2>我是Person组件</h2>
                <input ref={c => this.nameNode = c} placeholder='输入名字' />
                <input ref={c => this.ageNode = c} placeholder='输入年龄' />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    <li>名字---年龄 </li>
                    <li>名字---年龄 </li>
                    <li>名字---年龄 </li>
                </ul>
            </div>
        )
    }
}
