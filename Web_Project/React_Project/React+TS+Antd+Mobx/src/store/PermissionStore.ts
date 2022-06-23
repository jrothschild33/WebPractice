import {IRouter} from "../router";
import {action, makeAutoObservable, runInAction} from "mobx";
import {getAdminPermissionList} from "../api/permission";

export default class PermissionStore {
    permissionList: IRouter[] = []
    state: string = 'loading'

    constructor() {
        makeAutoObservable(this)
    }

    @action
    initPermission = async () => {
        const permissionList = await getAdminPermissionList().then(response => {
            return response.data.data
        })
        runInAction(() => {
            this.permissionList = permissionList
            this.state = 'success'
        })
    }

}
