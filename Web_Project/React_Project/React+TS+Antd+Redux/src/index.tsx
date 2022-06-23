import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'nprogress/nprogress.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from "./store";
import {ConfigProvider} from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('cn');

ReactDOM.render(
    <Provider store={store}>
        <ConfigProvider locale={zhCN}>
            <App/>
        </ConfigProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
