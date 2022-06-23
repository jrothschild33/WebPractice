import React, {Component} from "react";
import {Alert, Button, Form, Input, Modal, Space, Tree} from 'antd';
import {getRoleDetail, saveRole} from "../../api/role";
import {FormInstance} from "antd/lib/form";


const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

interface IPermission {
    id: number
    key: number
    isMenu: number
    parentId: number
    path: string
    title: string
    children: IPermission[]
}

interface IPermissionState {
    nodeList: IPermission[]
    defaultCheckedKeys: number[]
    defaultSelectedKeys: number[]
    defaultExpandedKeys: number[]
    visible: boolean
    roleName: string
}

interface IProps {
    roleId: number
    roleName: string
    callback: (roleName?: string) => void
}

class EditRole extends Component<IProps, IPermissionState> {
    state = {
        nodeList: [],
        defaultCheckedKeys: [],
        defaultExpandedKeys: [],
        defaultSelectedKeys: [],
        visible: true,
        roleName: this.props.roleName
    }
    formRef = React.createRef<FormInstance>();

    generatePermissionList = (permissionList: IPermission[], parentId: number = 0): IPermission[] => {
        let pl: IPermission[] = []
        permissionList.forEach((permission: IPermission) => {
            if (permission.parentId === parentId) {
                permission.key = permission.id
                permission.children = this.generatePermissionList(permissionList, permission.id)
                pl.push(permission)
            }
        })
        return pl
    }
    loadPermission = () => {
        getRoleDetail(this.props.roleId).then(response => {
            const {permissionList, permissionAll} = response.data.data
            let permissions = permissionList.map((permission: IPermission) => {
                return permission.id
            })
            this.setState({
                nodeList: this.generatePermissionList(permissionAll),
                defaultCheckedKeys: permissions,
            })
            // @ts-ignore
            this.formRef.current.setFieldsValue({
                permissionList: permissions
            })

        })
    }

    constructor(props: IProps, context: any) {
        super(props, context);
        this.loadPermission()
    }

    onCheck = (checkedKeys: any, info: any) => {
        // @ts-ignore
        this.formRef.current.setFieldsValue({
            permissionList: checkedKeys.checked
        })
    };

    handleOk = (value: any) => {
        saveRole(this.props.roleId, value.roleName, value.permissionList)
        this.setState({
            visible: false
        })
        this.props.callback(this.state.roleName)
    }
    handleCancel = () => {
        this.setState({
            visible: false
        })
    }

    render() {
        return (
            <>
                <Modal
                    footer={null}
                    afterClose={this.props.callback}
                    okText='确认'
                    cancelText='取消'
                    title={`修改角色`}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                >
                    <Form
                        onFinish={this.handleOk}
                        ref={this.formRef}
                        initialValues={{
                            roleName: this.props.roleName,
                            permissionList: this.state.defaultCheckedKeys
                        }}
                    >
                        <Form.Item
                            label='角色名称'
                            name='roleName'
                            rules={[
                                {
                                    required: true,
                                    message: '角色名称不可以为空'
                                }
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item>
                            <Alert
                                showIcon
                                message="选中子节点的时候一定要手动选中父级节点，否则不会生效"
                                type="warning"/>
                        </Form.Item>
                        {
                            this.state.nodeList.length > 0 ?
                                <Form.Item
                                    name='permissionList'
                                    label='选择权限'
                                    rules={[
                                        {
                                            type: "array",
                                            min: 1,
                                            required: true,
                                            validator: (rule, value) => {
                                                if (value.length <= 0) {
                                                    return Promise.reject('至少要选择一个权限！')
                                                }
                                                return Promise.resolve()
                                            }
                                        },

                                    ]}
                                >
                                    <Tree
                                        defaultExpandAll
                                        checkStrictly
                                        showLine
                                        checkable
                                        treeData={this.state.nodeList}
                                        defaultCheckedKeys={this.state.defaultCheckedKeys}
                                        onCheck={this.onCheck}
                                    />
                                </Form.Item>
                                :
                                null
                        }

                        <Form.Item {...tailLayout}>
                            <Space>
                                <Button type='primary' htmlType='submit'>保存</Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        );
    }
}

export default EditRole
