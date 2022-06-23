import React, {Component} from 'react';
import UserStore from "../../store/UserStore";
import {inject, observer} from "mobx-react";
import {Button} from "antd";

interface IProps {
    userStore?: UserStore
}

@inject('userStore')
@observer
class UserDetail extends Component<IProps> {
    changeName = () => {
        this.props.userStore?.changeName('Lee')
    }
    render() {
        return (
            <>
                {this.props.userStore?.username}
                <Button type='primary' onClick={this.changeName}>修改姓名</Button>
            </>
        );
    }
}

export default UserDetail;
