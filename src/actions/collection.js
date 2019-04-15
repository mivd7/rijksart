import * as request from 'superagent'
import {collectionBaseUrl} from '../constants'

const baseUrl = process.env.REACT_APP_BASE_URL || collectionBaseUrl

export const SET_COLLECTION_INFO = 'SET_COLLECTION'
export const SET_IMAGE_CAROUSEL = 'SET_IMAGE_CAROUSEL'

const setCollectionInfo = (collection) => {
  return {
    type: SET_COLLECTION_INFO,
    payload: collection
  }
}

const setImageCarousel = (painting) => {
  return {
    type: SET_IMAGE_CAROUSEL,
    payload: painting
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

export const loadCollectionPaintings = (id) => (dispatch) => {

  request(`https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=${process.env.REACT_APP_API_KEY}&format=json`)
  .then(response => {
      dispatch(setImageCarousel(response.body))
    })
    .catch(console.error)
}

