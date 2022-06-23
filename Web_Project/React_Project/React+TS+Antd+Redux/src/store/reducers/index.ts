import {combineReducers} from 'redux'
import admin from './AdminReducer'
import permission from './PermissionReducer'

export default combineReducers({admin, permission})