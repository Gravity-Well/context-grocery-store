import React,{useContext} from 'react';
import { createUseStyles } from 'react-jss'
import Login from './Login'
import Logout from './Logout'
import UserContext from './UserContext'


const useStyles = createUseStyles({
  wrapper: {
    borderBottom: 'black solid 1px',
    padding: [15, 10],
    textAlign: 'right',
    background: 'steelblue',
    color: 'white'
  }
});

export default function Navigation() {
 const user = useContext(UserContext)
  const classes = useStyles();
//    const person = {
//         name: 'Robert',
//         favorites: [
//           'avocado',
//           'apple'
//         ]
//       }
  return(
    <div className={classes.wrapper}>
       
    

     {/* {user.userState.name ? 
     `Welcome Back, ${user.userState.name}` : 
     <button style={{marginRight:'15px'}}    onClick={e=>{ user.signIn(person)

     }}> Sign In 🧍</button>
 
} */}

 {user.userState.name && (user.userState.favorites.length!==0) ? 
     `Welcome ${user.userState.name}. Ooh, Favorites. `  :
      user.userState.name && (user.userState.favorites.length===0) ? `Welcome ${user.userState.name}. Enjoy!`
     :
     <Login/>
 
}

   
    </div>
  )
}