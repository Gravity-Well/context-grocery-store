import React ,{createContext, useReducer} from 'react';
import { createUseStyles } from 'react-jss';
import SaladBuilder from './SaladBuilder';
import SaladSummary from './SaladSummary'
const useStyles = createUseStyles({
  wrapper: {
    textAlign: 'center',
  }
});

export const SaladContext = createContext();

function reducer(state, item) {
    return [...state, item]
  }

export default function SaladMaker() {
  const classes = useStyles();
  // reducer function and initial state. Empty array of ingredients
  const [salad, setSalad] = useReducer(reducer, []);
  return(
    //   Drop the object key if same as value
    <SaladContext.Provider value={{ salad, setSalad }}>
      <h1 className={classes.wrapper}>
        <span role="img" aria-label="salad">🥗 </span>
          Gravity Well Groceries - Happy Shopping
          <span role="img" aria-label="salad"> 🥗</span>
      </h1>
      <SaladBuilder/>
      <SaladSummary/>
    </SaladContext.Provider>
  )
}