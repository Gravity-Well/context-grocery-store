import React,{useState, useEffect, useContext} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import UserContext from './UserContext'

export default function Login() {
  const [open, setOpen] = useState(false);
  const [login,setLogin] = useState('')
  const user = useContext(UserContext)

  const userHandler = (event) => {
    setLogin(event.target.value)
    
  }

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  useEffect(()=>{
    const person = {
        name: 'Robert',
        favorites: [
          'avocados',
          'apples'
        ]
      }
      // Handle Cancel
      if (login==='Robert' || login==='Robert Tomlin'){
        user.signIn(person)
      }else{
          person.name=login
          person.favorites=[]
          user.signIn(person)
      }
  },[login])
  return (
    <div>
      <Button variant="outlined" color="primary" style={{backgroundColor:'whitesmoke'}} onClick={handleClickOpen}>
       Sign In 🧍
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" style={{color:'Blue', textAlign:'center'}}> Sign In</DialogTitle>
        <DialogContent>
          <DialogContentText style={{color:'Blue'}}>
           Begin your shopping experience
          </DialogContentText >
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="User Name"
            type="text"
            // placeholder='user name'
            fullWidth
            onBlur={userHandler}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Sign IN
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
