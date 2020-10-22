import React, { Component } from "react";

class Counter extends Component {

    state = {
        counter: 0,
        fixed: 1
    }

    handleIncrease = () => {
        // 함수형 업데이트는 바로 반영
        this.setState(state => ({
            counter: this.state.counter + 1
        }));
    }

    handleDecrease = () => {
        // 객체형 업데이트는 바로 반영되지 않는다.
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값 {this.state.fixed}</p>
            </div>
        );
    }
}


// function reducer(state, action) {
//     switch(action.type) {
//         case "INCREMENT":
//             return state+1;
//         case "DECREMENT":
//             return state-1;
//         default:
//             throw new Error("Unhandled action");
//     }
// }

// function Counter() {

//     const [number, dispatch] = useReducer(reducer, 0);

//     const onIncrease = () => {
//         dispatch({
//             type: "INCREMENT"
//         })
//     }

//     const onDecrease = () => {
//         dispatch({
//             type: "DECREMENT"
//         })
//     }
//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrease}>+1</button>
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     );
// }

export default Counter;