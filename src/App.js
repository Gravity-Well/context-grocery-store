import React ,{useContext} from 'react'
import Navigation from './components/Navigation.js'
import SaladMaker from './components/SaladMaker'


import UserContext from './components/UserContext'
import UserState from './components/UserState'




function App() {
  // const user = useContext(UserContext)

  return (
  
    <UserState>
 
      <Navigation/>
      <SaladMaker/> 

    </UserState>
  )
}

export default App