import React, {Component} from "react";
import {Button, message, Popconfirm} from "antd";
import {deleteUser} from "../../api/user";

interface IProps {
    userId: number
    callback: (userId: number) => void
}

interface IState {
    visibleDelete: boolean
}

class DeleteUser extends Component<IProps, IState> {

    constructor(props: IProps, context: any) {
        super(props, context);
        this.state = {
            visibleDelete: false
        }
    }

    deleteUser = () => {
        this.setState({
            visibleDelete: true
        })
    }
    confirm = () => {
        this.setState({
            visibleDelete: false
        })
        deleteUser(this.props.userId).then(response => {
            const {code, msg} = response.data
            if (code === 0) {
                message.success('删除成功！')
                this.props.callback(this.props.userId)
            } else {
                message.warn(msg)
            }
        })
    }
    cancel = () => {
        this.setState({
            visibleDelete: false
        })
        message.info('你取消了删除！')
    }

    render() {
        return (
            <>
                <Popconfirm title='你确定要删除用户吗？删除后不可以恢复！'
                            visible={this.state.visibleDelete}
                            okText="删除"
                            placement="topRight"
                            onConfirm={this.confirm}
                            onCancel={this.cancel}
                            cancelText="取消"
                >
                    <Button type='primary' danger onClick={this.deleteUser}>删除</Button>
                </Popconfirm>
            </>
        )
    }
}

export default DeleteUser
