import React, {Component, RefObject} from "react";
import {Button, Form, Input, message, Modal, Select, Space} from "antd";
import {IAdmin} from "../../store/states/AdminState";
import {updateAdmin} from "../../api/admin";
import {IRole} from "../interfaces/IRole";
import {getAllRole} from "../../api/role";
import {FormInstance} from "antd/lib/form";

const layout = {
    labelCol: {span: 4},
    wrapperCol: {span: 16},
};
const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

interface IEditAdminProps {
    admin?: IAdmin
    visible: boolean
    callback: (admin?: IAdmin) => void
}

interface IEditAdminState {
    roleList: IRole[]
}

class EditAdmin extends Component<IEditAdminProps, IEditAdminState> {
    formRef: RefObject<FormInstance>

    constructor(props: IEditAdminProps, context: any) {
        super(props, context);
        this.state = {
            roleList: []
        }
        this.formRef = React.createRef<FormInstance>()
    }

    getAllRole() {
        getAllRole().then(response => {
            const {data} = response.data
            this.setState({
                roleList: data
            })
        })
    }

    editAdmin = () => {
        this.getAllRole()
    }
    handleCancel = () => {
        this.props.callback(this.props.admin)
    }
    saveAdmin = (admin: IAdmin) => {
        if (this.props.admin) {
            if (admin.password === '') {
                // @ts-ignore
                delete admin.password
            }
            updateAdmin(this.props.admin.id, admin).then(response => {
                const {code, msg} = response.data
                if (code === 0) {
                    message.success(msg)
                    this.props.callback({...this.props.admin, ...admin})
                } else {
                    message.error(msg)
                    // this.props.callback(this.props.admin)
                }
            })
        }
    }

    componentDidMount() {
        this.getAllRole()
    }

    render() {
        this.formRef.current?.setFieldsValue({
            ...this.props.admin
        })
        return (
            <>
                <Modal
                    title="编辑管理员信息"
                    visible={this.props.visible}
                    onCancel={this.handleCancel}
                    cancelText='取消'
                    okText='确认'
                    footer={null}
                >
                    <Form
                        ref={this.formRef}
                        {...layout}
                        name="basic"
                        initialValues={{
                            ...this.props.admin
                        }}
                        onFinish={this.saveAdmin}
                    >
                        <Form.Item
                            label="名称"
                            name="name"
                            shouldUpdate={(prevValues, curValues) => prevValues.additional !== curValues.additional}
                            rules={[{required: true, message: '请输入管理员名称'}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password"
                            shouldUpdate={(prevValues, curValues) => prevValues.additional !== curValues.additional}
                            rules={[{
                                validator: (rules, value: string) => {
                                    if (value === '') {
                                        return Promise.resolve()
                                    }
                                    if (value.length < 6) {
                                        return Promise.reject('密码长度不能小于6位')
                                    } else if (value.length > 22) {
                                        return Promise.reject('密码长度不能大于22位')
                                    }
                                    return Promise.resolve()
                                }
                            }]}
                        >
                            <Input.Password/>
                        </Form.Item>
                        <Form.Item
                            label='角色'
                            name='roleId'
                        >
                            <Select
                                placeholder="请选择角色"
                                showSearch
                            >
                                {
                                    this.state.roleList.map((role) => (
                                        <Select.Option
                                            value={role.id}
                                            key={role.id}>{role.roleName}
                                        </Select.Option>
                                    ))
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Space>
                                <Button type="primary" htmlType="submit">
                                    提交
                                </Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        );
    }
}

export default EditAdmin
