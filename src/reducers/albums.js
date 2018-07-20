// reducers/albums.js
import { ADD_ALBUM, SET_ALBUMS } from '../actions/albums'

export default (state = [], action = {}) => {
  console.log(state, action);
  
  switch(action.type){
    case ADD_ALBUM: {
      return state.concat(action.payload)
    }
    case SET_ALBUMS: {
      return state.concat(action.payload)
    }
    default:
      return state
  }
}

