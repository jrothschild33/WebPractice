import React, {Component} from 'react';
import {Button, Space, Table} from "antd";
import {getAdminList} from "../../api/admin";
import DeleteAdmin from "./DeleteAdmin";
import AddAdmin from "./AddAdmin";
import EditAdmin from "./EditAdmin";

export interface IAdmin {
    id: number
    name: string
    mobile: string
    email: string
    roleId: number
}

interface IState {
    adminList: IAdmin[]
    current: number
    pageSize: number
    total: number
    loading: boolean
    showAddAdminModal: boolean
    showEditAdminModal: boolean
    admin?: IAdmin
}

class AdminList extends Component<any, IState> {

    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            adminList: [],
            current: 1,
            pageSize: 15,
            total: 0,
            loading: true,
            showAddAdminModal: false,
            showEditAdminModal: false
        }
    }

    getAdminList = (page: number = 1) => {
        getAdminList(page).then(response => {
            const {dataList, limit, totalCount} = response.data.data
            this.setState({
                adminList: dataList,
                loading: false,
                pageSize: limit,
                total: totalCount,
            })
        })
    }

    componentDidMount() {
        this.getAdminList()
    }

    change = (pagination: any) => {
        this.getAdminList(pagination.current)
    }
    deleteAdmin = (id: number) => {
        this.setState((state) => ({
            adminList: state.adminList.filter(admin => admin.id !== id)
        }))
    }
    showAddAdminModal = () => {
        this.setState({
            showAddAdminModal: true
        })
    }
    hideAddAdminModal = (refresh?: boolean) => {
        if (refresh) {
            this.getAdminList();
        }
        this.setState({
            showAddAdminModal: false
        });
    }
    showEditAdminModal = (admin?: IAdmin) => {
        this.setState({
            admin: admin,
            showEditAdminModal: true
        })
    }
    hideEditAdminModal = (refresh?: boolean) => {
        if (refresh) {
            this.getAdminList();
        }
        this.setState({
            showEditAdminModal: false
        })
    }

    render() {
        return (
            <>
                <Button type='primary' onClick={this.showAddAdminModal}>添加管理员</Button>
                <AddAdmin
                    visible={this.state.showAddAdminModal}
                    callback={this.hideAddAdminModal}
                />
                <EditAdmin
                    admin={this.state.admin}

                    visible={this.state.showEditAdminModal}
                    cancel={this.hideEditAdminModal}
                />
                <Table
                    loading={this.state.loading}
                    dataSource={this.state.adminList}
                    rowKey={'id'}
                    pagination={{
                        position: ['bottomCenter'],
                        total: this.state.total,
                        pageSize: this.state.pageSize,
                        showSizeChanger: false
                    }}
                    onChange={this.change}
                >
                    <Table.Column
                        title={'ID'}
                        dataIndex={'id'}/>
                    <Table.Column
                        title={'姓名'}
                        dataIndex={'name'}/>
                    <Table.Column
                        title={'邮箱'}
                        dataIndex={'email'}/>
                    <Table.Column
                        title={'电话'}
                        dataIndex={'mobile'}/>
                    <Table.Column
                        title={'电话'}
                        render={(admin: IAdmin) => (<Space>
                            <Button type='primary' onClick={() => {
                                this.showEditAdminModal(admin)
                            }}>编辑</Button>
                            <DeleteAdmin id={admin.id} deleteAdmin={this.deleteAdmin}/>
                        </Space>)}
                    />
                </Table>
            </>
        )
            ;
    }
}

export default AdminList;
