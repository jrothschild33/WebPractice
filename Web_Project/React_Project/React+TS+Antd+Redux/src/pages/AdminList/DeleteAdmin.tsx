import React, {Component} from "react";
import {Button, message, Popconfirm} from "antd";
import {IAdmin} from "../../store/states/AdminState";
import { deleteAdmin } from "../../api/admin";

interface IDeleteAdminPropos {
    admin: IAdmin
    callback: (admin: IAdmin) => void
}

interface IDeleteAdminState {
    visibleDelete: boolean
}

class DeleteAdmin extends Component<IDeleteAdminPropos, IDeleteAdminState> {
    state: IDeleteAdminState = {
        visibleDelete: false
    }
    deleteAdmin = () => {
        this.setState({
            visibleDelete: true
        })
    }
    confirm = () => {
        this.setState({
            visibleDelete: false
        })
        if (this.props.admin) {
            deleteAdmin(this.props.admin.id).then(response => {
                const {code, msg} = response.data
                if (code === 0) {
                    message.success('删除成功！')
                    this.props.callback(this.props.admin)
                } else {
                    message.warn(msg)
                }
            })
        }
    }
    cancel = () => {
        this.setState({
            visibleDelete: false
        })
        message.info('你取消了删除！')
    }

    render() {
        return (
            <div>
                <Popconfirm title='你确定要删除管理员吗？删除后不可以恢复！'
                            visible={this.state.visibleDelete}
                            okText="删除"
                            placement="topRight"
                            onConfirm={this.confirm}
                            onCancel={this.cancel}
                            cancelText="取消"
                >
                    <Button type='primary' onClick={this.deleteAdmin} danger>删除</Button>
                </Popconfirm>
            </div>
        )
    }
}

export default DeleteAdmin