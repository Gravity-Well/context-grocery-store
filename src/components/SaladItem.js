import React,{useContext, useReducer} from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';


import UserContext from './UserContext'
import { SaladContext } from './SaladMaker';
// textTransform: 'capitalize' capitalizes the first letter only
const useStyles = createUseStyles({
  add: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  favorite: {
    fontSize: 20,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  addFav:{
    fontSize: 10,
    position: 'absolute',
    bottom: 10,
    right: 10,
   
  },
  image: {
    fontSize: 80
  },
  wrapper: {
    border: 'lightgrey solid 1px',
    background: 'whitesmoke',
    margin: 20,
    padding: 25,
    position: 'relative',
    textAlign: 'center',
    textTransform: 'capitalize',
    width: 200,
  }
});

const reducer = key => key + 1// Move into SaladContext.js

export default function SaladItem({ image, name }) {
  const classes = useStyles()
  const { setSalad } = useContext(SaladContext)
  const user = useContext(UserContext);
  const favorite = user.userState.favorites.includes(name)    // name here is the ingredient name
  const [id, updateId] = useReducer(reducer, 0);

  function updateIngredients() {
    setSalad({
        name,
      id: `${name}-${id}`
    })
    updateId();
  };
  
  return(
    <div className={classes.wrapper}>
        <h3>
          {name}
        </h3>
        <span className={classes.favorite} aria-label={favorite ? 'Favorite' : 'Not Favorite'}>
          {favorite ? '😋' : ''}
        </span>
        <button className={classes.add} onClick={updateIngredients}>
          <span className={classes.image} role="img" aria-label={name}>{image}</span>
        </button>
        {!favorite ? 
        <button className={classes.addFav} onClick={e=>{
            console.log(name)
            user.addFavorite(name)}} >Add Fav</button>
        
      : <button className={classes.addFav} onClick={e=>{user.remFavorite(name)}} >Rem Fav</button>
    }
        {/* <button className={classes.addFav} onClick={e=>{user.addFavorite(name)}}>
          {!favorite ? 'Add Fav' : ''}
        </button> */}
    </div>
  )
}

SaladItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}