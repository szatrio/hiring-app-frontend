import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import rpm from 'redux-promise-middleware'
import { createLogger } from 'redux-logger'

const logger = createLogger({})

const store = createStore(
    rootReducer,
    applyMiddleware(logger, rpm)
)

export default store