import { combineReducers } from 'redux'

import engineers from './engineers'
import companyProject from './companyProject'

const rootReducer = combineReducers({
  engineers: engineers,
  companyProject: companyProject
})

export default rootReducer