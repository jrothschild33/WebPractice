import {action, makeAutoObservable, observable, runInAction} from "mobx";
import {clear, set} from "../utils/storage";
import {getAdminInfo} from "../api/admin";

interface IAdmin {
    id: number
    name: string
    avatar: string
}

export class AdminStore {
    @observable
    public admin: IAdmin = {id: 0, name: '', avatar: ''}

    constructor(admin: IAdmin = {id: 0, name: 'admin', avatar: ''}) {
        this.admin = admin;
        makeAutoObservable(this)
    }

    @action
    logout = () => {
        this.admin = {id: 0, name: '', avatar: ''}
        clear()
    }
    @action
    login = (token: string) => {
        set('token', token)
    }
    @action
    initAdmin = async () => {
        const admin = await getAdminInfo().then(response => {
            return response.data.data
        })
        runInAction(() => {
            this.admin = admin
        })
    }
}
