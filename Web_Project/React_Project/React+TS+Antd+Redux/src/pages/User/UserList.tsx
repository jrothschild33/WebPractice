import React, {Component} from "react";
import {getUserList} from "../../api/user";
import {Button, Space, Table} from "antd";
import Permission from '../../components/Permission'
import DeleteUser from "./DeleteUser";
import EditUser from "./EditUser";

interface IUser {
    id: number
    name: string
    mobile: string
    avatar: string
    email: string
}

interface IState {
    userList: IUser[]
    pageSize: number
    page: number
    perPage: number
    totalCount: number
    visible: boolean
    user?: IUser
}

class UserList extends Component<any, IState> {
    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            userList: [],
            page: 1,
            perPage: 15,
            totalCount: 0,
            pageSize: 0,
            visible: false
        }
    }

    getUserList = (page: number = 1) => {
        getUserList(page).then(response => {
            const {data: {currentPage, dataList, totalCount, limit}} = response.data
            this.setState({
                page: currentPage,
                userList: dataList,
                totalCount: totalCount,
                pageSize: limit
            })
        })
    }
    onChange = (page: number) => {
        this.getUserList(page)
    }

    componentDidMount() {
        this.getUserList(1)
    }

    deleteUser = (userId: number) => {
        this.setState((state) => ({
            userList: state.userList.filter(user => user.id !== userId)
        }))
    }
    editUser = (user: IUser) => {

    }
    show = (visible: boolean, user?: IUser) => {
        this.setState((state) => ({
            visible: visible,
            user: user,
            userList: state.userList.map((u, _) => {
                if (u.id === user?.id) {
                    return user
                } else {
                    return u
                }
            })
        }))
    }

    render() {
        return (
            <>
                <EditUser visible={this.state.visible} user={this.state.user} callback={this.show}/>
                <Table
                    pagination={{
                        position: ['bottomCenter'],
                        total: this.state.totalCount,
                        hideOnSinglePage: true,
                        defaultCurrent: this.state.page,
                        defaultPageSize: this.state.perPage,
                        showSizeChanger: false,
                        onChange: this.onChange
                    }}
                    dataSource={this.state.userList}
                    rowKey={'id'}
                >
                    <Table.Column
                        title={'ID'}
                        dataIndex={'id'}/>
                    <Table.Column
                        title={'姓名'}
                        dataIndex={'name'}/>
                    <Table.Column
                        title={'电话'}
                        dataIndex={'mobile'}/>
                    <Table.Column
                        title={'头像'}
                        dataIndex={'avatar'}/>
                    <Table.Column
                        title={'邮箱'}
                        dataIndex={'email'}/>
                    <Table.Column
                        title={'操作'}
                        render={(user: IUser) => (
                            <Space>

                                <Permission
                                    path={'editUser'}
                                    children={<Button type='primary' onClick={() => {
                                        this.show(true, user)
                                    }}>编辑</Button>}/>
                                <Permission
                                    path={'deleteUser'}
                                    children={<DeleteUser userId={user.id} callback={this.deleteUser}/>}/>
                            </Space>
                        )}
                    />
                </Table>
            </>
        )
    }
}

export default UserList
