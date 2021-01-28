export const ADD_FAV = 'ADD_FAV'
export const REMOVE_FAV = 'REMOVE_FAV'
export const SIGNIN = 'SIGNIN'
export const SIGNOUT = 'SIGOUT'



const UserReducer = (state,action) =>{
 
    switch(action.type){
        case SIGNIN:
          
           
          
            return {
               name:action.payload.name,
               favorites:action.payload.favorites
            
            }
        case SIGNOUT:
          
              
              
                return {
                   name:action.payload.name,
                   favorites:action.payload.favorites
                
                }
        case ADD_FAV:
           
           
            
            return {
                ...state,
                favorites: [...state.favorites,action.payload]
            
            }
        case REMOVE_FAV:
           
        const favs=state.favorites.filter(item=>(item!==action.payload))
         
        console.log(favs)
            return  {
                
                ...state,
                favorites: favs
            
            } 
        default:
            return state
    }
    
}

export default UserReducer