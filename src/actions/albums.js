import request from 'superagent'

export const ADD_ALBUM = 'ADD_ALBUM'
export const SET_ALBUMS = 'SET_ALBUMS'

export const addAlbum = (id, title) => {
  return {
    type: ADD_ALBUM,
    payload: {
      id,
      title
    }
  }
}

export const setAlbums = (albums) => {
  return {
    type: SET_ALBUMS,
    payload: albums
  }
}

export function getAlbums() {
  return function (dispatch) {
    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        dispatch(setAlbums(response.body))
      })
  }
}
