import React,{useReducer, useState} from 'react'

import UserContext from './UserContext'

import UserReducer,{SIGNIN,SIGNOUT,ADD_FAV,REMOVE_FAV} from './UserReducer'



const UserState = (props)=>{



      const initialUserState = {
        name: '',
        favorites: []
      }
    

    const [userState, dispatch] = useReducer(UserReducer, initialUserState);

const  signIn = person =>{
  
    dispatch({ type: SIGNIN, payload: person })
}
const  signOut = person =>{
  
    dispatch({ type: SIGNOUT, payload: person })
}

const  addFavorite = fav =>{
   
    dispatch({ type: ADD_FAV, payload: fav })
}
const  remFavorite = fav =>{
   
    dispatch({ type: REMOVE_FAV, payload: fav })
}



        return(
            <UserContext.Provider value={{userState,addFavorite,remFavorite,signIn,signOut}}>
               
                 {props.children}

            </UserContext.Provider>
          
        )
}

export default UserState

