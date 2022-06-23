export interface IAdmin {
    id: number
    avatar: string
    name: string
    roleId: number
    password: string
}

export interface AdminState {
    loading: boolean
    admin: IAdmin
}