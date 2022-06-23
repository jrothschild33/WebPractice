import React, {Component} from 'react'
import {Button, Card, Col, Row, Statistic, Tabs, DatePicker, Table} from 'antd'
import Permission from '../components/Permission'
import Echarts from "../components/Echarts";

const {TabPane} = Tabs;
const {RangePicker} = DatePicker;

class Index extends Component<any, any> {
    option: any
    goodsOption: any

    constructor(props: any, context: any) {
        super(props, context);
        this.option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c}'
            },
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子', '衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子', '衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销售额',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20]
            }]
        }

        this.goodsOption = {
            title: {
                text: '产品销售占比',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    data: [
                        {value: 1048, name: '搜索引擎'},
                        {value: 735, name: '直接访问'},
                        {value: 580, name: '邮件营销'},
                        {value: 484, name: '联盟广告'},
                        {value: 300, name: '视频广告'}
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }
    }

    render() {
        return (
            <>
                <Permission path='/a' children={<Button type='primary'>1111111111111</Button>}/>
                <Row gutter={24}>
                    <Col span={6}>
                        <Card>
                            <Statistic title="销售额" value={'￥' + 112893}/>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            <Statistic title="用户数" value={112893}/>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            <Statistic title="支付笔数" value={100}/>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            <Statistic title="库存数" value={100}/>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={14}>
                        <Tabs
                            defaultActiveKey="1"
                            tabBarExtraContent={<>    <RangePicker/></>}
                        >
                            <TabPane tab="月销售额统计" key="1">
                                <Echarts option={this.option}/>
                            </TabPane>
                            <TabPane tab="用户统计" key="2">
                                <Echarts option={this.option}/>
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={10}>
                        <Echarts option={this.goodsOption}/>
                    </Col>
                </Row>
                <Table
                    title={() => '代办事项'}
                >
                    <Table.Column
                        title='ID'
                    />
                    <Table.Column
                        title='事件类型'
                    />
                    <Table.Column
                        title='用户名'
                    />
                    <Table.Column
                        title='电话'
                    />
                </Table>
            </>
        )
    }
}

export default Index
