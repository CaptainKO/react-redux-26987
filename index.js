import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import { applyMiddleware, createStore, combineReducers } from "redux";
import logger from 'redux-logger';
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "buy cake"
  };
}

function buyIcecream() {
  return {
    type: BUY_ICECREAM,
    info: "buy ice cream"
  };
}

const cakeInitialState = {
  numOfCakes: 10,
};
const iceCreamInitialState = {
  numOfIceCreams: 20
};

const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      };
    default:
      return state;
  }
};
const iceCreamReducer = (state = iceCreamInitialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
      };
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
});
const store = createStore(rootReducer, applyMiddleware(logger));
console.log(store.getState());
// store.subscribe(() => console.log("Updated", store.getState()));

store.dispatch(buyCake());
store.dispatch(buyIcecream());

store.dispatch(buyCake());

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
