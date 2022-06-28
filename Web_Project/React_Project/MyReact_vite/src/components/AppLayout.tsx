// 作用：页面公共布局，如顶部栏、侧边栏
import React, { FC, useCallback, useState } from 'react'
import LeftBar from './LeftBar'
import { Breadcrumb, Layout, Menu, Button } from 'antd'
import type { MenuProps } from 'antd'
import { Link, RouteComponentProps } from 'react-router-dom'
// import { AdminStore } from '../store/AdminStore'
// import PermissionStore from '../store/PermissionStore'
import SubTitle from './SubTitle'

const { Header, Content, Sider } = Layout

const navItems: MenuProps['items'] = [
  {
    key: '1',
    label: '主页',
  },
  {
    key: '2',
    label: '设置',
  },
]

// interface Props extends RouteComponentProps {
//   adminStore?: AdminStore
//   permissionStore?: PermissionStore
// }

interface State {
  auth: boolean
}

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

        {/* 面包屑导航：Home / List / App */}
        <Layout style={{ padding: '0 24px 24px' }}>
          <SubTitle />

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

// export default AppLayout
