import React from 'react';
import SaladItem from './SaladItem'

import { createUseStyles } from 'react-jss';
// padding - top, left, bottom, right
const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: [10, 250, 100, 250],
    justifyContent: 'center',
  
  }
});


const ingredients = [
  {
    image: '🍎',
    name: 'apples',
  },
  {
    image: '🥑',
    name: 'avocados',
  },
  {
    image: '🥦',
    name: 'broccoli',
  },
  {
    image: '🥕',
    name: 'carrots',
  },
  {
    image: '🥔',
    name: 'potatoes',
  },
  {
    image: '🥒',
    name: 'cucumbers',
  },
  {
    image: '🦞',
    name: 'lobster',
  },
  {
    image: '🦐',
    name: 'shrimp',
  },


];

export default function SaladBuilder() {
  const classes = useStyles();
  return(
    <div className={classes.wrapper}>
      {
        ingredients.map(ingredient => (
          <SaladItem
            key={ingredient.name}
            image={ingredient.image}
            name={ingredient.name}
          />
        ))
      }
    </div>
  )
}