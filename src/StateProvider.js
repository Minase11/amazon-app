import React, { createContext, useContext, useReducer } from "react";

// Prepares the data layer
export const StateContext = createContext();

// wraps our app and provide data layer
export const StateProvider = ({ children, reducer, initialState }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// allow component to use(access) the data layer
export const useStateValue = () => useContext(StateContext);
