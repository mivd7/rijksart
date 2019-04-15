import { SET_COLLECTION_INFO } from '../actions/collection'

export default function (state = [], action = {}) {
  switch(action.type) {
  case SET_COLLECTION_INFO:
    return action.payload.artObjects
  default:
    return state
  }
}