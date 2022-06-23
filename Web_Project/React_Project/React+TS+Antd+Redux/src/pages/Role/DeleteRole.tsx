import React, {Component} from "react";
import {Button, message, Popconfirm} from "antd";
import {IRole} from "../interfaces/IRole";
import {deleteRole} from "../../api/role";

interface IDeleteRoleProps extends IRole {
    role:IRole
    deleteRoleCallback: (role: IRole) => void
}

class DeleteRole extends Component<IDeleteRoleProps, any> {
    deleteRole = () => {
        deleteRole(this.props.role.id).then(response => {
            const {code, msg} = response.data
            if (code === 1) {
                message.error(msg)
            } else {
                message.success('删除成功')
                this.props.deleteRoleCallback(this.props.role)
            }
        })
    }

    render() {
        return (
            <Popconfirm
                onConfirm={this.deleteRole}
                onCancel={() => {
                    message.info('你取消了删除')
                }}
                title="你确定要删除么?删除后不可恢复！"
                okText="删除"
                cancelText="取消"
            >
                <Button type='primary' danger>
                    删除
                </Button>
            </Popconfirm>
        );
    }
}

export default DeleteRole