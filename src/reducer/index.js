import { combineReducers } from 'redux-immutablejs'
import { routerStateReducer } from 'redux-router'
import activity from './activity'

export const reducer = combineReducers({
    route: routerStateReducer,
    activity
})