import React, {Component} from "react";
import {Button, Form, Input, message, Progress} from "antd";
import {config} from "../api/config";
import {withRouter} from "react-router";

const layout = {
    labelCol: {span: 6},
    wrapperCol: {span: 16},
};
const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

interface IState {
    progress: number
    loading: boolean
}

class Config extends Component<any, IState> {
    timer: any

    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            progress: 10,
            loading: false
        }
    }

    onFinish = (values: any) => {
        this.setState({
            loading: true
        })
        this.timer = setInterval(() => {
            this.setState((state) => ({
                progress: state.progress + 1
            }))
        }, 200)
        config(values).then((response) => {
            const {code} = response.data
            if (code === 0) {
                clearInterval(this.timer)
                this.setState(() => ({
                    progress: 100
                }))
                message.success('安装成功')
                this.props.history.push('/login')
            } else {
                setTimeout(() => {
                    message.error('配置错误！请修改后重试')
                    this.setState({
                        progress: 10,
                        loading: false
                    })
                    clearInterval(this.timer)
                }, 1000)
            }

        })
    };

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        return (
            <>
                {
                    this.state.loading ?
                        <div style={{margin: '0 auto', position: "absolute", top: '50%', left: '50%'}}>
                            <Progress type="circle" percent={this.state.progress}/>
                        </div>
                        :
                        <Form
                            ref={null}
                            initialValues={{
                                host: 'localhost',
                                name: 'root',
                                port: 3306,
                                db: '',
                                password: ''
                            }}
                            style={{margin: '0 auto', marginTop: '100px', width: '500px', borderRadius: '16px'}}
                            onFinish={this.onFinish}
                            {...layout}
                        >
                            <Form.Item
                                label="数据库地址"
                                name="host"
                                rules={[
                                    {
                                        required: true,
                                        message: '数据库地址不可以为空'
                                    }
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                label="数据库"
                                name="db"
                                rules={[
                                    {
                                        required: true,
                                        message: '数据库不可以为空'
                                    }
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                label="数据库用户名"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: '数据库用户名不可以为空'
                                    }
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                label="数据库端口号"
                                name="port"
                                rules={[
                                    {
                                        required: true,
                                        message: '数据库端口号不可以为空'
                                    }
                                ]}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                label="数据库密码"
                                name="password"
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    提交
                                </Button>
                            </Form.Item>
                        </Form>
                }

            </>
        )
    }

}

export default withRouter(Config)
