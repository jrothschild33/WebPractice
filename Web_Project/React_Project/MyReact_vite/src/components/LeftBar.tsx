// 布局：侧边导航栏
import React, { FC, useCallback, useEffect, useState } from 'react'
import { Link, withRouter, matchPath, RouteComponentProps, useHistory } from 'react-router-dom'
import { IRouter, router } from '@/router'
import { Button, Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

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

interface IState {
  defaultOpenKeys: string[]
  defaultSelectedKeys: string[]
}

interface IProps extends RouteComponentProps {}

const LeftBar: FC<IProps> = (props: IProps) => {
  const [defaultOpenKeys, setDefaultOpenKeys] = useState<string[]>([])
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<string[]>([])
  const [collapsed, setCollapsed] = useState(false)
  const toggleCollapsed = useCallback(() => {
    setCollapsed(!collapsed)
  }, [collapsed])

  // react挂载时便执行：侧边栏选项处理函数
  useEffect(() => {
    chooseDefaultKeys(router)
  }, [])

  // 处理侧边栏选项的选中和打开问题（根据页面URL判断），不然每次刷新，侧边栏都是选死的
  const chooseDefaultKeys = (leftRouters: IRouter[]) => {
    // 获取当前URL路径
    let path = props.location.pathname
    // 遍历router
    for (let r of leftRouters) {
      // 使用react内置的matchPath进行路由URL匹配
      let match = matchPath(path, { path: r.path })
      if (match) {
        // console.log(match)
        // match会根据路由层级，层层深入查找，比如/admin/user/list
        // 第一次返回/(isExact=false)，第二次返回/admin/user(isExact=false)，第三次返回/admin/user/list(isExact=true)
        if (match.isExact) {
          setDefaultSelectedKeys([r.key])
          // console.log('defaultSelectedKeys', defaultSelectedKeys)
        } else {
          setDefaultOpenKeys([r.key])
          // console.log('defaultOpenKeys', defaultOpenKeys)
        }
      }
      // 如果还有子路由，再次遍历
      if (r.children) {
        chooseDefaultKeys(r.children)
      }
    }
  }

  // 动态生成导航
  const generateMenu = (routerList?: IRouter[]): MenuProps['items'] => {
    return routerList?.map((r) => {
      if (r.children) {
        return getItem(r.title, r.key, r.icon, generateMenu(r.children))
      } else return getItem(<Link to={r.path}>{r.title}</Link>, r.key, r.icon)
    })
  }

  return (
    <Sider width={200} trigger={null} collapsible collapsed={collapsed}>
      <Button type="primary" onClick={toggleCollapsed} style={{ margin: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>

      {/* 正常 */}
      {defaultSelectedKeys.length > 0 ? (
        <Menu
          mode="inline"
          theme="dark"
          defaultSelectedKeys={defaultSelectedKeys}
          defaultOpenKeys={defaultOpenKeys}
          items={generateMenu(router)}
        />
      ) : null}
    </Sider>
  )
}

export default withRouter(LeftBar)
