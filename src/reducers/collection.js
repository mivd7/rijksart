import { SET_COLLECTION } from '../actions/collection'

export default function (state = [], action = {}) {
  switch(action.type) {
  case SET_COLLECTION:
    return action.payload.artObjects.map(object => object.webImage)
  default:
    return state
  }
}