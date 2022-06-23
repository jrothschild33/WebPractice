import React, {Component, createRef, RefObject} from 'react';
import {IAdmin} from "./AdminList";
import {Button, Form, FormInstance, Input, message, Modal} from "antd";
import {saveAdmin} from "../../api/admin";

const layout = {
    labelCol: {span: 4},
    wrapperCol: {span: 16},
};
const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

interface IProps {
    admin?: IAdmin
    visible: boolean
    cancel: (refresh?: boolean) => void
}

class EditAdmin extends Component<IProps> {

    formRef: RefObject<FormInstance>

    constructor(props: IProps, context: any) {
        super(props, context);
        this.formRef = createRef<FormInstance>()
    }

    cancel = () => {
        this.props.cancel()
    }
    saveAdmin = (admin: IAdmin) => {
        admin.roleId = 1;
        saveAdmin(this.props.admin?.id as number, admin).then(response => {
            const {code, msg} = response.data
            if (code === 0) {
                message.success(msg);
                this.props.cancel(true)
            } else {
                message.error(msg)
            }
        })
    }

    render() {
        this.formRef.current?.setFieldsValue({...this.props.admin, password: ''})
        return (
            <Modal
                title='编辑管理员'
                visible={this.props.visible}
                footer={null}
                onCancel={this.cancel}
            >
                <Form
                    ref={this.formRef}
                    {...layout}
                    onFinish={this.saveAdmin}
                    initialValues={{
                        ...this.props.admin,
                        password: ''
                    }}
                >
                    <Form.Item
                        name='name'
                        shouldUpdate={(prevValues, curValues) => prevValues.additional !== curValues.additional}
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
                        shouldUpdate={(prevValues, curValues) => prevValues.additional !== curValues.additional}
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
                        shouldUpdate={(prevValues, curValues) => prevValues.additional !== curValues.additional}
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

export default EditAdmin;
