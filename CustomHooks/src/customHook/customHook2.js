import React, { useEffect, useState } from "react";
let globalState = {};
let listners = [];
let actions = {};
function useStore() {
  const [state, setState] = useState(globalState);
  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };
    for (const listner of listners) {
      listner(globalState);
    }
  };

  useEffect(() => {
    listners.push(setState);
    return () => {
      listners = listners.filter((li) => li !== setState);
    };
  }, [setState]);

  return [globalState, dispatch];
}

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};

export default useStore;
