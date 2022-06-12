import React, { useContext } from "react";
import { StateContext, DispatchContext } from "../App";
import { ACTIONS } from "../App";



const Calculator = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  return (
    <section className="h-2/3 w-[min(100%-20px,540px)] flex gap-6 flex-col">
      <p className="block bg-screen-bg p-6 rounded-md text-right text-white text-4xl">{state.displayValue}</p>
      <div className="rounded-md p-6 grid gap-4 grid-cols-4   bg-keyboard-bg">

        <button className="keyboard-button"
          onClick={() => {
            dispatch({ type: ACTIONS.INPUT, payload: 7 });
          }}
        >
          7
        </button>
        <button className="keyboard-button "
          onClick={() => {
            dispatch({ type: ACTIONS.INPUT, payload: 8 });
          }}
        >
          8
        </button>
        <button className="keyboard-button "
          onClick={() => {
            dispatch({ type: ACTIONS.INPUT, payload: 9 });
          }}
        >
          9
        </button>
        <button className="keyboard-button bg-key-bg text-lg flex flex-col justify-center items-center text-white"
          onClick={() => {
            dispatch({ type: ACTIONS.DELETE });
          }}
        >
          DEL
        </button>
        <button className="keyboard-button "
          onClick={() => {
            dispatch({ type: ACTIONS.INPUT, payload: 4 });
          }}
        >
          4
        </button>
        <button className="keyboard-button "
          onClick={() => {
            dispatch({ type: ACTIONS.INPUT, payload: 5 });
          }}
        >
          5
        </button>
        <button className="keyboard-button "
          onClick={() => {
            dispatch({ type: ACTIONS.INPUT, payload: 6 });
          }}
        >
          6
        </button>
        <button className="keyboard-button "
          onClick={() => {
            dispatch({ type: ACTIONS.ADD });
          }}
        >
          +
        </button>
        <button className="keyboard-button "
          onClick={() => {
            dispatch({ type: ACTIONS.INPUT, payload: 1 });
          }}
        >
          1
        </button>
        <button className="keyboard-button "
          onClick={() => {
            dispatch({ type: ACTIONS.INPUT, payload: 2 });
          }}
        >
          2
        </button>
        <button className="keyboard-button "
          onClick={() => {
            dispatch({ type: ACTIONS.INPUT, payload: 3 });
          }}
        >
          3
        </button>
        <button className="keyboard-button "
          onClick={() => {
            dispatch({ type: ACTIONS.SUBTRACT });
          }}
        >
          -
        </button>
        <button className="keyboard-button "
          onClick={() => {
            dispatch({ type: ACTIONS.INPUT, payload: "." });
          }}
        >
          .
        </button>
        <button className="keyboard-button "
          onClick={() => {
            dispatch({ type: ACTIONS.INPUT, payload: 0 });
          }}
        >
          0
        </button>
        <button className="keyboard-button "
          onClick={() => {
            dispatch({ type: ACTIONS.DIVIDE });
          }}
        >
          /
        </button>



        <button className="keyboard-button "
          onClick={() => {
            dispatch({ type: ACTIONS.MULTIPLY });
          }}
        >
          *
        </button>



        <button className="keyboard-button bg-key-bg text-lg flex flex-col justify-center items-center text-white flex-1"
          onClick={() => {
            dispatch({ type: ACTIONS.RESET });
          }}
        >
          RESET
        </button>
        <button className="keyboard-button flex-1"
          onClick={() => {
            dispatch({ type: ACTIONS.RESULT });
          }}
        >
          =
        </button>

      </div>
    </section>
  );
};

export default Calculator;
