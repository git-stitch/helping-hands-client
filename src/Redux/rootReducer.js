import { combineReducers } from 'redux'
import userReducer from './UserReducer'
import organizationReducer from './organizationReducer'

const rootReducer = combineReducers({
  userReducer: userReducer,
  organizationReducer: organizationReducer
})

export default rootReducer