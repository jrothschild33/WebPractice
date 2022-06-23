import React, {Component} from "react";
import {getProductList} from "../../api/product";
import {Button, Space, Table} from "antd";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";

interface IProduct {
    id: number
    name: string
    description: string
}

interface IState {
    productList: IProduct[]

    product?: IProduct
    pageSize: number
    page: number
    perPage: number
    totalCount: number
    visible: boolean
}

export default class ProductList extends Component<any, IState> {

    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            productList: [],
            page: 1,
            visible: false,
            perPage: 15,
            totalCount: 0,
            pageSize: 0,
        }
    }

    getProductList = (page: number = 1) => {
        getProductList(page).then(response => {
            // 这个是接口返回的数据
            const {data: {currentPage, dataList, totalCount, limit}} = response.data
            this.setState({
                page: currentPage,
                productList: dataList,
                totalCount: totalCount,
                pageSize: limit
            })
        })
    }

    componentDidMount() {
        this.getProductList()
    }

    onChange = (page: number) => {
        this.getProductList(page)
    }
    editProduct = (visible: boolean, product?: IProduct) => {
        if (visible) {
            this.setState({
                visible: visible,
                product: product
            });
        } else {
            this.setState((state) => ({
                visible: visible,
                productList: state.productList.map((p, _) => {
                    if (p.id === product?.id) {
                        return product
                    }
                    return p;
                }),
                product: product
            }))
        }
    }
    deleteProduct = (productId: number) => {
        this.setState((state) => ({
            productList: state.productList.filter(p => p.id !== productId)
        }))
    }

    render() {
        return (
            <>
                <EditProduct product={this.state.product} visible={this.state.visible} callback={this.editProduct}/>
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
                    dataSource={this.state.productList}
                    rowKey='id'
                >
                    <Table.Column
                        title='ID'
                        dataIndex={'id'}/>
                    <Table.Column
                        title='产品名称'
                        dataIndex={'name'}/>
                    <Table.Column
                        title='描述'
                        dataIndex={'description'}/>
                    <Table.Column
                        title='管理'
                        render={(product: IProduct) => (
                            <Space>
                                <Button type='primary' onClick={() => {
                                    this.editProduct(true, product)
                                }}>编辑</Button>
                                <DeleteProduct id={product.id} callback={this.deleteProduct}/>
                            </Space>
                        )}
                    />
                </Table>

            </>
        )
    }
}
