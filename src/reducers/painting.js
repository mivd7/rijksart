import { SET_PAINTING } from '../actions/painting'

export default function (state = [], action = {}) {
  switch(action.type) {
    case SET_PAINTING:
      return action.payload.artObject.webImage
    default:
      return state
  }
}