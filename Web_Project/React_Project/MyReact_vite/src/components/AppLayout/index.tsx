// 作用：页面公共布局，如顶部栏、侧边栏
import React, { useCallback, useState } from 'react'
import LeftBar from '../LeftBar'
import { Breadcrumb, Layout, Menu, Button } from 'antd'
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  DashboardOutlined,
  TeamOutlined,
  ApartmentOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Link } from 'react-router-dom'
import './index.css'

const { Header, Content, Sider } = Layout

const navItems: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}))

export default function AppLayout(props: any) {
  return (
    <Layout>
      {/* 顶部导航栏 */}
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={navItems} />
      </Header>

      <Layout>
        {/* 侧边导航栏 */}
        <LeftBar />

        {/* 顶部字体导航：Home / List / App */}
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>

          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 1080,
            }}
          >
            {/* React子组件：包含组件的开始标签和结束标签之间的内容 */}
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
