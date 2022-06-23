import React, {Component, createRef, RefObject} from 'react';
import {Button, Form, FormInstance, Input, message, Modal} from "antd";
import {IAdmin} from "./AdminList";
import {addAdmin} from "../../api/admin";

const layout = {
    labelCol: {span: 4},
    wrapperCol: {span: 16},
};
const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

interface IProps {
    visible: boolean
    callback: (refresh?: boolean) => void
}

class AddAdmin extends Component<IProps> {
    formRef: RefObject<FormInstance>

    constructor(props: IProps, context: any) {
        super(props, context);
        this.formRef = createRef<FormInstance>()
    }

    cancel = () => {
        this.props.callback()
    }
    addAdmin = (admin: IAdmin) => {
        addAdmin(admin).then(response => {
            const {code, msg} = response.data
            if (code === 0) {
                message.success(msg)
                this.formRef.current?.resetFields();
                this.props.callback(true)
            } else {
                message.error(msg)
            }
        })
    }

    render() {
        return (
            <Modal
                title='添加管理员'
                visible={this.props.visible}
                onCancel={this.cancel}
                footer={null}
            >
                <Form
                    ref={this.formRef}
                    {...layout}
                    onFinish={this.addAdmin}
                >
                    <Form.Item
                        name='name'
                        rules={[
                            {
                                type: 'string',
                                required: true,
                                message: '用户名不可以为空'
                            }
                        ]}
                        label='用户名'>
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name='mobile'
                        rules={[
                            {
                                type: 'string',
                                required: true,
                                message: '手机号不可以为空'
                            }
                        ]}
                        label='手机号'>
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name='password'
                        rules={[
                            {
                                type: 'string',
                                validator: (rule, value) => {
                                    if (value === undefined || value === '') {
                                        return Promise.resolve()
                                    }
                                    if (value.length < 6) {
                                        return Promise.reject('密码长度不可以小于6位');
                                    }
                                    return Promise.resolve()
                                }
                            }
                        ]}
                        label='密码'>
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            添加管理员
                        </Button>
                        <Button type="default" htmlType="reset">
                            重置
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        );
    }
}

export default AddAdmin;
