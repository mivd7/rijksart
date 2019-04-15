import { combineReducers } from 'redux'
import art from './art'
import painting from './painting'
import collection from './collection'

export default combineReducers({
  art,
  painting,
  collection
})