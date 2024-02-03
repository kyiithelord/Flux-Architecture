import React, { useReducer } from "react";

const reducer = (store, action) => {
  switch (action.type) {
    case "increase": {
      if (action.payload) {
        return (store = store + action.payload);
      } else {
        return (store = store + 1);
      }
      break;
    }
    case "decrease": {
      if (store > 0) {
        return (store = store - 1);
      } else {
        return store;
      }
      break;
    }
    case "addWithPayLoad": {
      return (store = store + action.payload);
    }
    default: {
      return store;
    }
  }
};

const App = () => {
  const [state, dispatcher] = useReducer(reducer, 0);
  const handleAdd = () => {
    dispatcher({ type: "increase", payload: 3 });
  };
  const handleRemove = () => {
    dispatcher({ type: "decrease" });
  };
  const payLoadHandle = () => {
    dispatcher({ type: "addWithPayLoad", payload: 2 });
  };
  return (
    <div>
      <h1>{state} </h1>
      <button onClick={handleAdd}>Add</button>
      <br />
      <button onClick={handleRemove}>Remove</button>
      <br />
      <button onClick={payLoadHandle}>Add 2</button>
    </div>
  );
};

export default App;
