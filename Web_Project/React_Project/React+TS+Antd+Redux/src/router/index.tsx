import React, {lazy} from "react"
import Login from "../pages/Login"
import Page404 from "../pages/Page404"
import Page403 from "../pages/Page403"
import {DashboardOutlined, DashboardTwoTone, TeamOutlined, UserOutlined} from '@ant-design/icons';
import {IRoute} from "../store/states/PermissionState";
import Config from "../pages/Config";

const UserList = lazy(() => import("../pages/User/UserList"))
const RoleList = lazy(() => import( '../pages/Role/RoleList'))
const AdminList = lazy(() => import("../pages/AdminList/AdminList"))
const Index = lazy(() => import("../pages/Index"))
const Activity = lazy(() => import('../pages/Activity/ActivityList'))
const ProductList = lazy(() => import('../pages/Product/ProductList'))
export const leftRoute: IRoute[] = [
    {
        id: '1-1',
        icon: <DashboardOutlined/>,
        exact: true,
        path: '/admin/dashboard',
        title: '仪表盘',
        isMenu: 0,
        component: <Index/>
    },
    {
        id: '3-0',
        icon: <UserOutlined/>,
        path: '/admin/list',
        title: '管理员管理',
        isMenu: 1,
        routes: [
            {
                id: '3-1',
                icon: <UserOutlined/>,
                path: '/admin/admin/list',
                title: '管理员列表',
                isMenu: 0,
                component: <AdminList/>
            }
        ]
    },
    {
        id: '4-0',
        icon: <TeamOutlined/>,
        path: '/admin/role',
        title: '角色管理',
        isMenu: 1,
        routes: [
            {
                id: '4-1',
                icon: <DashboardTwoTone/>,
                path: '/admin/role/list',
                title: '角色列表',
                isMenu: 0,
                component: <RoleList/>
            }
        ]
    },
    {
        id: '5-0',
        icon: <TeamOutlined/>,
        path: '/admin/user',
        title: '用户管理',
        isMenu: 1,
        routes: [
            {
                id: '5-1',
                icon: <DashboardTwoTone/>,
                path: '/admin/user/list',
                title: '用户列表',
                isMenu: 0,
                component: <UserList/>
            }
        ]
    },
    {
        id: '6-0',
        icon: <TeamOutlined/>,
        path: '',
        title: '活动管理',
        isMenu: 1,
        routes: [
            {
                id: '6-1',
                icon: <DashboardTwoTone/>,
                path: '/admin/activity/list',
                title: '活动列表',
                isMenu: 0,
                component: <Activity/>
            }
        ]
    },
    {
        id: '7-0',
        icon: <TeamOutlined/>,
        path: '',
        title: '产品管理',
        isMenu: 1,
        routes: [
            {
                id: '7-1',
                icon: <DashboardTwoTone/>,
                path: '/admin/product/list',
                title: '产品列表',
                isMenu: 0,
                component: <ProductList/>
            }
        ]
    }
]
export const topRoute: IRoute[] = []

export const authRoutes: IRoute[] = [
    ...leftRoute,
    ...topRoute
]
export const unAuthRouters: IRoute[] = [
    {
        id: '0-0',
        path: '/login',
        title: '登录',
        isMenu: 1,
        component: <Login/>
    },
    {
        id: '777777777-0',
        path: '/config',
        title: '404',
        isMenu: 0,
        component: <Config/>
    },
    {
        id: '55555555555555555-0',
        path: '/403',
        title: '403',
        isMenu: 0,
        component: <Page403/>
    },
    {
        id: '6666666666666666-0',
        path: '*',
        title: '404',
        isMenu: 0,
        component: <Page404/>
    }
]
