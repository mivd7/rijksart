import * as request from 'superagent'
import {collectionBaseUrl} from '../constants'

const baseUrl = process.env.REACT_APP_BASE_URL || collectionBaseUrl

export const SET_COLLECTION_INFO = 'SET_COLLECTION'

const setCollectionInfo = (collection) => {
  return {
    type: SET_COLLECTION_INFO,
    payload: collection
  }
}

export const loadCollectionInfo = () => 
  function (dispatch) {
    request(`${baseUrl}?key=${process.env.REACT_APP_API_KEY}&format=json&type=schilderij&f.normalized32Colors.hex=%20%23367614`)
      .then(response => {
        dispatch(setCollectionInfo(response.body))
      })
      .catch(err => console.log(err))
}
