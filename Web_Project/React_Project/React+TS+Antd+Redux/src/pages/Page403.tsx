import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Button, Result} from "antd";
import '../static/css/error.css'

class Page403 extends Component<any, any> {
    backHome = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <>
                <Result
                    status="403"
                    title="403"
                    subTitle="很抱歉，你没有权限反问这个页面！"
                    extra={<Button type="primary" onClick={this.backHome}>回到首页</Button>}
                />
            </>
        )
    }
}

export default withRouter(Page403)
