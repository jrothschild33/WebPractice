import React, { ReactNode, lazy } from 'react'
import { UserOutlined, DashboardOutlined } from '@ant-design/icons'

// 懒加载
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Login = lazy(() => import('../pages/Login'))
const Page404 = lazy(() => import('../pages/Page404'))
const UserList = lazy(() => import('../pages/UserList'))
const AdminList = lazy(() => import('../pages/AdminList'))
const RoleList = lazy(() => import('../pages/RoleList'))

export interface IRouter {
  path: string
  title: string
  key: string // 用于map遍历
  exact?: boolean // 用于开启严格匹配
  icon?: ReactNode
  component?: ReactNode
  children?: IRouter[]
}

// 定义主页路由（需登录）
export const mainRouter: IRouter[] = [
  {
    path: '/',
    title: '仪表盘',
    icon: <DashboardOutlined />,
    key: 'dashboard',
    component: <Dashboard />,
  },
]

// 定义左侧路由（需登录）
export const leftRouter: IRouter[] = [
  {
    path: '/admin/user',
    title: '用户管理',
    icon: <UserOutlined />,
    key: 'user',
    children: [
      {
        path: '/admin/user/list',
        title: '用户列表',
        icon: <UserOutlined />,
        key: 'userlist',
        component: <UserList />,
      },
    ],
  },

  {
    path: '/admin/admin',
    title: '管理员管理',
    icon: <UserOutlined />,
    key: 'admin',
    children: [
      {
        path: '/admin/admin/list',
        title: '管理员列表',
        icon: <UserOutlined />,
        key: 'adminList',
        component: <AdminList />,
      },
    ],
  },

  {
    path: '/admin/role',
    title: '角色管理',
    icon: <UserOutlined />,
    key: 'role',
    children: [
      {
        path: '/admin/role/list',
        title: '角色列表',
        icon: <UserOutlined />,
        key: 'rolelist',
        component: <RoleList />,
      },
    ],
  },
]

// 定义上侧路由（需登录）
export const topRouter: IRouter[] = []

// 聚合：路由（需登录）
// export const router: IRouter[] = [...leftRouter, ...topRouter]

// 定义通用路由（无需登录）
export const unAuthRouter: IRouter[] = [
  {
    path: '/login',
    title: '登录',
    key: 'login',
    component: <Login />,
  },
  {
    path: '*',
    title: '404',
    key: '404',
    component: <Page404 />,
  },
]
