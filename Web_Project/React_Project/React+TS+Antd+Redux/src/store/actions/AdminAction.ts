import {getAdminInfo} from '../../api';
import {get, rm} from '../../utils/storage';
import {AdminType} from '../types/AdminType';
import {Dispatch} from 'redux'

export interface AdminAction {
    type: AdminType,
    data?: any
}

export const doLogin = (dispatch: Dispatch, admin: any) => {
    dispatch({type: AdminType.LOGIN, data: {admin, loading: false}})
}
export const logout = (dispatch: Dispatch) => {
    rm('token')
    dispatch({
        type: AdminType.LOGOUT
    })
}
export const syncAdminInfo = (dispatch: Dispatch) => {

    if (get('token') !== null) {
        dispatch({
            type: AdminType.LOADING,
            data: {loading: true}
        })
        getAdminInfo().then(response => {
            const {data} = response.data
            dispatch({
                type: AdminType.SET,
                data: {admin:data, loading: false}
            })
        });
    } else {
        dispatch({
            type: AdminType.LOADING,
            data: {loading: false}
        })
    }
}