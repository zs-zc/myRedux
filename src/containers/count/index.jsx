import CountUI from "../../components/count"
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from "../../redux/count_action"

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

export default connect(state => ({ count: state }), {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementAsync: createIncrementAsyncAction
})(CountUI)