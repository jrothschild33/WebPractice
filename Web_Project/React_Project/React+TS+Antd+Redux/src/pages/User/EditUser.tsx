import React, {Component, RefObject} from "react";
import {Button, Form, Input, message, Modal, Space} from "antd";
import {FormInstance} from "antd/lib/form";
import {updateUser} from "../../api/user";

const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

interface IUser {
    id: number
    name: string
    mobile: string
    avatar: string
    email: string
}

interface IProps {
    visible: boolean
    user?: IUser
    callback: (visible: boolean, user?: IUser) => void
}

class EditUser extends Component<IProps, any> {
    formRef: RefObject<FormInstance>

    constructor(props: IProps, context: any) {
        super(props, context);
        this.formRef = React.createRef<FormInstance>();
    }

    handleCancel = () => {
        this.props.callback(false)
    }
    saveUser = (user: IUser) => {
        user = {...this.props.user, ...user}
        updateUser(this.props.user?.id as number, user).then(response => {
            const {code, msg} = response.data
            if (code === 0) {
                message.success('更新成功！')
                this.props.callback(false, user)
            } else {
                message.warn(msg)
            }
        })
    }

    render() {
        this.formRef.current?.setFieldsValue({...this.props.user})
        return (
            <>
                <Modal
                    title="编辑用户信息"
                    visible={this.props.visible}
                    onCancel={this.handleCancel}
                    cancelText='取消'
                    okText='确认'
                    footer={null}
                >

                    <Form
                        ref={this.formRef}
                        onFinish={this.saveUser}
                        initialValues={{
                            ...this.props.user
                        }}
                    >
                        <Form.Item
                            shouldUpdate={(prevValues, curValues) => prevValues.additional !== curValues.additional}
                            label='姓名'
                            name='name'
                            rules={[{required: true, message: '用户姓名不可以为空'}]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            shouldUpdate={(prevValues, curValues) => prevValues.additional !== curValues.additional}
                            label='手机号'
                            name='mobile'
                            rules={[{required: true, message: '手机号不可以为空'}]}
                        >
                            <Input/>
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
        )
    }
}

export default EditUser
