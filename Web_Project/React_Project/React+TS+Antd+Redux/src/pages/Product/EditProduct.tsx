import React, {Component, RefObject} from "react";
import {Button, Form, Input, message, Modal, Space} from "antd";
import {FormInstance} from "antd/lib/form";
import {updateProduct} from "../../api/product";

const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

interface IProduct {
    id: number
    name: string
    description: string
}

interface IProps {
    product?: IProduct
    visible: boolean
    callback: (visible: boolean, product?: IProduct) => void
}

export default class EditProduct extends Component<IProps, any> {
    formRef: RefObject<FormInstance>

    constructor(props: IProps, context: any) {
        super(props, context);
        this.formRef = React.createRef<FormInstance>();
    }

    handleCancel = () => {
        this.props.callback(false)
    }
    updateProduct = (product: IProduct) => {
        product = {...this.props.product, ...product}
        if (product) {
            // @ts-ignore
            updateProduct(this.props.product.id, product).then(response => {
                const {code, msg} = response.data
                if (code === 0) {
                    message.success('更新成功！')
                    this.props.callback(false, product)

                } else {
                    message.warn(msg)
                    this.props.callback(false)
                }
            })
        } else {
            this.props.callback(false)
        }
    }

    render() {
        this.formRef.current?.setFieldsValue({...this.props.product})
        return (
            <>
                <Modal
                    title="编辑产品信息"
                    visible={this.props.visible}
                    onCancel={this.handleCancel}
                    cancelText='取消'
                    okText='确认'
                    footer={null}
                >
                    <Form
                        ref={this.formRef}
                        onFinish={this.updateProduct}

                        initialValues={{
                            ...this.props.product
                        }}
                    >
                        <Form.Item
                            name='name'
                            label='名称'
                            rules={[{required: true, message: '名称不可以为空'}]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label='描述'
                            name='description'
                            rules={[{required: true, message: '描述不可以为空'}]}
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
