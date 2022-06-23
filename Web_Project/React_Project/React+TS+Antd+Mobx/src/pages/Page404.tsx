import {Button, Result} from 'antd';
import React, {Component} from 'react';

class Page404 extends Component {
    render() {
        return (
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary">Back Home</Button>}
            />
        );
    }
}

export default Page404;
