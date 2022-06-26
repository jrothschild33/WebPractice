// 布局：侧边导航栏
import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, Layout, Menu, Button } from 'antd'
import type { MenuProps } from 'antd'
import {
  UserOutlined,
  DashboardOutlined,
  TeamOutlined,
  ApartmentOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'

const { Header, Content, Sider } = Layout
type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

const menuItems: MenuProps['items'] = [
  getItem(<Link to="/">仪表盘</Link>, 'dashboard', <DashboardOutlined />),
  getItem('用户管理', 'userManage', <UserOutlined />, [
    getItem(<Link to="/admin/user/list">用户列表</Link>, 'userList'),
  ]),
  getItem('角色管理', 'roleManage', <TeamOutlined />, [
    getItem(<Link to="/admin/role/list">角色列表</Link>, 'roleList'),
  ]),
  getItem('管理员管理', 'adminManage', <ApartmentOutlined />, [
    getItem(<Link to="/admin/admin/list">管理员列表</Link>, 'adminList'),
  ]),

  // getItem('Navigation One', 'sub1', <UserOutlined />, [
  //   getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
  //   getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  // ]),

  // getItem('Navigation Two', 'sub2', <LaptopOutlined />, [
  //   getItem('Option 5', '5'),
  //   getItem('Option 6', '6'),
  //   getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  // ]),
]

export default function LeftBar() {
  const [collapsed, setCollapsed] = useState(false)
  const toggleCollapsed = useCallback(() => {
    setCollapsed(!collapsed)
  }, [collapsed])
  return (
    <Sider width={200} trigger={null} collapsible collapsed={collapsed}>
      <Button type="primary" onClick={toggleCollapsed} style={{ margin: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={['dashboard']}
        defaultOpenKeys={['dashboard']}
        items={menuItems}
      />
    </Sider>
  )
}
