import React, {Component} from 'react'
import {Button, Space, Table} from 'antd'
import {getAdminList} from '../../api/admin'
import Permission from '../../components/Permission'
import DeleteAdmin from "./DeleteAdmin";
import {IAdmin} from "../../store/states/AdminState";
import {IRole} from "../interfaces/IRole";
import EditAdmin from './EditAdmin'


interface IState {
    adminList: IAdmin[]
    roleList: IRole[]
    pageSize: number
    admin?: IAdmin
    page: number
    perPage: number
    visible: boolean
    totalCount: number
}


class AdminList extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            adminList: [],
            roleList: [],
            page: 1,
            perPage: 15,
            totalCount: 0,
            pageSize: 0,
            visible: false
        }
    }

    componentDidMount() {
        this.getAdminList()
    }

    deleteAdminCallback = (admin: IAdmin) => {
        this.setState({
            adminList: this.state.adminList.filter(a => a.id !== admin.id)
        })
    }
    editAdmin = (admin: IAdmin) => {
        admin.password = ''
        this.setState({
            visible: true,
            admin: admin
        })
    }
    getAdminList = (page: number = 1) => {
        getAdminList(page).then(response => {
            const {data: {currentPage, dataList, totalCount, limit}} = response.data
            this.setState({
                page: currentPage,
                adminList: dataList,
                totalCount: totalCount,
                pageSize: limit
            })
        })
    }
    onChange = (page: number) => {
        this.getAdminList(page)
    }
    editAdminCallback = (admin?: IAdmin) => {
        this.setState({
            visible: false,
            adminList: this.state.adminList.map((a) => {
                if (a.id === admin?.id) {
                    return admin
                }
                return a
            })
        })
    }

    render() {
        return (
            <div>
                <EditAdmin visible={this.state.visible} admin={this.state.admin} callback={this.editAdminCallback}/>
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
                    dataSource={this.state.adminList}
                    rowKey='id'
                >
                    <Table.Column
                        title="ID" dataIndex="id" key="id"
                    />
                    <Table.Column
                        title="名称" dataIndex="name" key="name"
                    />
                    <Table.Column
                        fixed='right'
                        title="操作"
                        key="action"
                        render={(admin: IAdmin) => (
                            <Space size="middle">
                                <Permission path='editAdmin'
                                            children={
                                                <Button onClick={() => {
                                                    this.editAdmin(admin)
                                                }} type='primary'>编辑</Button>
                                            }
                                />
                                <Permission
                                    path='deleteAdmin'
                                    children={<DeleteAdmin admin={admin} callback={this.deleteAdminCallback}/>}
                                />
                            </Space>
                        )}
                    />

                </Table>
            </div>
        )
    }
}

export default AdminList
