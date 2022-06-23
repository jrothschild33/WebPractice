import React, {Component} from "react";
import {Avatar, Dropdown, Layout, Menu} from "antd";
import {DownOutlined} from '@ant-design/icons';
import {connect} from "react-redux";
import {NavLink, RouteComponentProps, withRouter} from "react-router-dom";
import {AdminState} from "../store/states/AdminState";
import {Dispatch} from "redux";
import {logout} from "../store/actions/AdminAction";
import {topRoute} from "../router";
import {IRoute, PermissionState} from "../store/states/PermissionState";

const {Header} = Layout;

interface IProps extends AdminState, RouteComponentProps {
    logout: () => void
    permissionList?: IRoute[]
}

interface IState {
    permissionSet: Set<String>
}

class TopHeader extends Component<IProps, IState> {
    logout = () => {
        this.props.logout()
        this.props.history.replace('/login')
    }

    render() {
        return (
            <>
                <Header className="header">
                    <Dropdown
                        overlay={
                            <Menu>
                                <Menu.Item key="1" onClick={this.logout}>
                                    退出
                                </Menu.Item>
                            </Menu>
                        }
                        className={'admin'}
                    >
                        <div>
                            <Avatar
                                src={this.props.admin.avatar}
                            />

                            <span className={'admin-name'}>
                                {this.props.admin.name}
                            </span>
                            <DownOutlined/>
                        </div>
                    </Dropdown>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['5-0']}>
                        {
                            topRoute.map(route => (
                                <Menu.Item key={route.id}>
                                    <NavLink to={route.path}>
                                        {route.title}
                                    </NavLink>
                                </Menu.Item>
                            ))
                        }
                    </Menu>
                </Header>
            </>
        );
    }
}

interface IStoreState {
    admin: AdminState
    permission: PermissionState
}

const mapStateToProps = (state: IStoreState): AdminState => {
    return {...state.admin, ...state.permission};
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
        logout: () => {
            logout(dispatch)
        }
    }
)
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TopHeader))
