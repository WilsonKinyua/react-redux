import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
// import { Component } from "react";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const toggle = useSelector((state) => state.showCounter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  const incrementCounterHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementCounterHandler = () => {
    dispatch({ type: "decrement" });
  };

  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div className={classes.counter}>
        <button onClick={incrementCounterHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementCounterHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// using class based components for redux
// class Counter extends Component {
//   incrementCounterHandler() {
//     this.props.increment();
//   }

//   decrementCounterHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div className={classes.counter}>
//           <button onClick={this.incrementCounterHandler.bind(this)}>
//             Increment
//           </button>
//           <button onClick={this.decrementCounterHandler.bind(this)}>
//             Decrement
//           </button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;
