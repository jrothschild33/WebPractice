import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Button, Result} from "antd";
import '../static/css/error.css'

class Page404 extends Component<any, any> {
    backHome = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <>
                <Result
                    status="404"
                    title="404"
                    subTitle="很抱歉，你反问的页面不存在！"
                    extra={<Button type="primary" onClick={this.backHome}>回到首页</Button>}
                />
            </>
        )
    }
}

export default withRouter(Page404)
