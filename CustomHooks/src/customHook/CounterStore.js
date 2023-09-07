import { initStore } from "./customHook2";

const configureStore = () => {
  const actions = {
    increment: (currentState, value) => ({
      counter: currentState.counter + value,
    }),
    decrement: (currentState, value) => ({
      counter: currentState.counter - value,
    }),
  };
  initStore(actions, { counter: 0 });
};

export default configureStore;
