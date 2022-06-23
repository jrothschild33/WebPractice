import {PermissionType} from '../types/PermissionType';
import {Dispatch} from 'redux'
import {get} from "../../utils/storage";
import {getAdminPermissionList} from "../../api/admin";

export interface PermissionAction {
    type: PermissionType,
    data?: any
}

export const getPermissionList = (dispatch: Dispatch) => {
    if (get('token') !== null) {
        dispatch({
            type: PermissionType.SET,
            data: {permissionList: [], loading: true}
        });
        getAdminPermissionList().then(response => {
            const {data} = response.data
            dispatch({
                type: PermissionType.SET,
                data: {permissionList: data, loading: false}
            });
        })
    } else {
        dispatch({
            type: PermissionType.SET,
            data: {permissionList: [], loading: false}
        });
    }
}