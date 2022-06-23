import React, {Component, ReactNode} from 'react'
import {connect} from 'react-redux'
import {IRoute, PermissionState} from '../store/states/PermissionState'

interface IProps {
    path: string
    permissionList?: IRoute[]
    children?: ReactNode
}

// 把权限的唯一标识【path】传过来 ，把需要页面里做限制的组件传过来 判断权限 返回最终的组件
// 如果没有权限就隐藏
class Permission extends Component<IProps, any> {
    checkPermission = (permission: string): boolean => {
        if (this.props.permissionList) {
            return this.props.permissionList.filter((p) => p.path === permission).length > 0
        } else {
            return false
        }
    }

    render() {
        return (
            <>
                {
                    this.checkPermission(this.props.path) ?
                        this.props.children
                        :
                        ''
                }
            </>
        )
    }
}

interface IStoreState {
    permission: PermissionState
}

const mapStateToProps = (state: IStoreState): PermissionState => {
    if (state.permission.loading) {
        return {loading: true, permissionList: []}
    }
    return {...state.permission};
}
export default connect(mapStateToProps)(Permission)
