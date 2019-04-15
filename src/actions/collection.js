import * as request from 'superagent'

const baseUrl = process.env.REACT_APP_BASE_URL

export const SET_COLLECTION = 'SET_COLLECTION'

const setCollection = (collection) => {
  return {
    type: SET_COLLECTION,
    payload: collection
  }
}

export const loadCollection = () => 
  function (dispatch) {
    request(`${baseUrl}key=${process.env.REACT_APP_API_KEY}&format=json&type=schilderij&f.normalized32Colors.hex=%20%23367614`)
      .then(response => {
        dispatch(setCollection(response.body))
      })
      .catch(err => console.log(err))
}
