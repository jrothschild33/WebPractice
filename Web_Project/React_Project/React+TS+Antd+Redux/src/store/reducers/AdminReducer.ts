import {AdminType} from '../types/AdminType';
import {AdminAction} from '../actions/AdminAction';
import {AdminState} from '../states/AdminState';

const initAdminState: AdminState = {
    loading: true,
    admin: {
        id: 0,
        avatar: '',
        name: '',
        roleId: 0,
        password: ''
    }
}
const admin = (state: AdminState = initAdminState, action: AdminAction): AdminState => {
    switch (action.type) {
        case AdminType.LOADING:
            return {...state, ...action.data}
        case AdminType.GET:
            return {...state}
        case AdminType.SET:
            return {...state, ...action.data}
        case AdminType.LOGIN:
            return {...state, ...action.data}
        default:
            return state
    }
}
export default admin