import React, {Component, RefObject} from "react";
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import {
    BarChart,
    PieChart
} from 'echarts/charts';
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
    TitleComponent,
    TooltipComponent,
    GridComponent
} from 'echarts/components';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import {
    CanvasRenderer
} from 'echarts/renderers';

// 注册必须的组件
echarts.use(
    [TitleComponent, TooltipComponent, GridComponent, BarChart, PieChart, CanvasRenderer]
);

interface IProps {
    width?: string
    height?: string
    option: any
}

export default class Echarts extends Component<IProps, any> {
    chart: RefObject<any>

    constructor(props: IProps, context: any) {
        super(props, context);
        this.chart = React.createRef<HTMLElement>()
    }

    componentDidMount() {
        let myChart = echarts.init(this.chart.current as HTMLElement);
        myChart.setOption(this.props.option);
    }

    render() {
        return (
            <div ref={this.chart} style={{width: this.props.width ?? '100%', height: this.props.height ?? '300px'}}/>
        )
    }
}
