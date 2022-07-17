//   1。该文件用于创建一个Count的组件服务的reduce，reduce的本质就是一个函数，
// 2、reducer函数会接到两个参数，分别为：之前的额状态(preState),动作对象(action)

const initState = 0
export default function countReduce(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case 'increment':
            return preState + data
        case 'decrement':
            return preState - data

        default:
            return preState

    }
}