import React, { useReducer } from "react";

const initialState = {
  showtextFlag: false,
  changeTextStylesFlag: false,
};

const HIDE_TEXT = "HIDE_TEXT";
const SHOW_TEXT = "SHOW_TEXT";
const CHANGE_TEXT_STYLE = "CHANGE_TEXT_STYLE";

function reducer(state, action) {
  switch (action.type) {
    case "HIDE_TEXT":
      return {
        ...state,
        showtextFlag: false,
      };
    case "SHOW_TEXT":
      return {
        ...state,
        showtextFlag: true,
      };
    case "CHANGE_TEXT_STYLE":
      return {
        ...state,
        changeTextStylesFlag: !state.changeTextStylesFlag,
      };
    default:
      return state;
  }
}
const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div>
      {state?.showtextFlag ? (
        <h1
          style={{
            backgroundColor: state?.changeTextStylesFlag ? "black" : "red",
          }}
        >
          Use reducer hook example
        </h1>
      ) : null}

      <button onClick={() => dispatch({ type: HIDE_TEXT })}>Hide Text</button>
      <button onClick={() => dispatch({ type: SHOW_TEXT })}>Show Text</button>
      <button onClick={() => dispatch({ type: CHANGE_TEXT_STYLE })}>
        Toggle Text Style
      </button>
    </div>
  );
};

export default UseReducerExample;
