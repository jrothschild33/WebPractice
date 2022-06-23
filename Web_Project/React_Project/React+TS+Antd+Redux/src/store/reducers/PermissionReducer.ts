import {PermissionType} from '../types/PermissionType';
import {PermissionAction} from '../actions/PermissionAction';
import {PermissionState} from '../states/PermissionState';

const initPermissionState: PermissionState = {
    loading: true,
    permissionList: []
}
const permission = (state: PermissionState = initPermissionState, action: PermissionAction) => {
    switch (action.type) {
        case PermissionType.GET:
            return {...state}
        case PermissionType.SET:
            return {...state, ...action.data}
        default:
            return state
    }
}
export default permission