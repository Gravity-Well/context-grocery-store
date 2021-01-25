import  { createContext, useReducer } from 'react';

export const SaladContext = createContext();

// initial state is an empty array of ingredients
const [salad, setSalad] = useReducer(reducer, []);

function reducer(state, item) {
    return [...state, item]
  }



export default SaladContext