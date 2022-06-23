import React, {Component, ReactNode} from 'react';
import {inject, observer} from "mobx-react";
import PermissionStore from "../store/PermissionStore";

interface IProps {
    path: string
    children?: ReactNode
    permissionStore?: PermissionStore
}

@inject('permissionStore')
@observer
class Auth extends Component<IProps> {
    render() {
        let auth: boolean = false
        if (this.props.permissionStore) {
            for (let permission of this.props.permissionStore?.permissionList) {
                if (permission.path === this.props.path) {
                    auth = true
                    break
                }
            }
        }
        if (auth) {
            return (
                <>
                    {this.props.children}
                </>
            )
        }
        return null;
    }
}

export default Auth;
