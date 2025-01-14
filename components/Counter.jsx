import React from "react";
import { useReducer } from "react";

const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };

    default:
      throw new Error();
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  state.count <= 0 ? (state.count = 0) : state.count;
  const { count } = state;

  return (
    <div>
      <h1 style={{ color: state.count % 5 === 0 ? "pink" : "orange" }}>
        Count: {count}
      </h1>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrease</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increase</button>
    </div>
  );
};

export default Counter;
