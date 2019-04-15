import { SET_COLLECTION_INFO, SET_IMAGE_CAROUSEL } from '../actions/collection'

export default function (state = [], action = {}) {
  switch(action.type) {
  case SET_COLLECTION_INFO:
    return action.payload.artObjects
  case SET_IMAGE_CAROUSEL:
    return action.payload.artObjects.map(object => object.webImage)
  default:
    return state
  }
}