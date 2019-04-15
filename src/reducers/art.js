import { SET_ART } from '../actions/art'

export default function (state = [], action = {}) {
  switch(action.type) {
  case SET_ART:
    return action.payload.artObject
  default:
    return state
  }
}