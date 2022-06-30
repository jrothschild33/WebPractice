// 作用：页面公共布局，如顶部栏、侧边栏
import { FC, useCallback, useEffect, useState } from 'react'
import { matchPath, withRouter } from 'react-router-dom'
import { useStore } from '@store'
import { get } from '@utils/storage'
import LeftBar from './LeftBar'
import SubTitle from './SubTitle'
import { Alert, Spin, Layout, Menu, Modal, Button, Result, Dropdown, Avatar } from 'antd'
import { DownOutlined, IeOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import './AppLayout.css'

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

const AppLayout: FC = (props: any) => {
  const [auth, setAuth] = useState<boolean>(false)

  const { adminStore, permissionStore } = useStore()

  // 检查当前用户拥有的权限
  const getPermissionAuth = () => {
    if (get('token')) {
      permissionStore
        .initPermission()
        .then(() => {
          if (permissionStore.state === 'success') {
            for (let p of permissionStore.permissionList) {
              let match = matchPath(props.location.pathname, { path: p.path })
              if (match !== null && match.isExact) {
                setAuth(true)
                break
              }
            }
          }
        })
        .catch(() => {
          Modal.error({ title: '网络请求错误' })
          props.history.push('/login')
        })
    } else {
      Modal.error({ title: '请先登录！' })
      props.history.push('/login')
    }
  }

  // 校验用户是否登录
  useEffect(() => {
    getPermissionAuth()
  }, [])

  // 用户退出
  const logOut = useCallback(() => {
    adminStore.logOut()
    props.history.push('/login')
  }, [])

  return (
    <Layout>
      {/* 顶部导航栏 */}
      <Header className="header">
        {/* <div className="logo" /> */}
        {/* <a
          style={{
            lineHeight: '48rpx',
            display: 'flex',
            height: 48,
            color: 'rgba(255, 255, 255, 0.65)',
            alignItems: 'center',
          }}
          href="https://preview.pro.ant.design/dashboard/analysis"
          target="_blank"
          rel="noreferrer"
        > */}
        <img
          alt="pro-logo"
          src="https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png"
          style={{
            float: 'left',
            width: 120,
            height: 40,
            margin: '16px 16px 16px -14px',
            marginRight: 44,
          }}
        />
        {/* </a> */}
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="1" onClick={logOut}>
                退出
              </Menu.Item>
            </Menu>
          }
          className={'admin'}
        >
          <div>
            {/* <Avatar src={adminStore?.admin?.avatar} /> */}
            <Avatar src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F13386674055%2F1000.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659169790&t=dd5eaf3d0a96e5add43dc6d85f2d5309" />
            <span className={'admin-name'}>{adminStore?.admin.name}</span>
            <DownOutlined />
          </div>
        </Dropdown>
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
            {permissionStore.state === 'loading' ? (
              <Spin tip="Loading...">
                <Alert message="正在加载" description="请耐心等待，正在加载内容..." type="info" />
              </Spin>
            ) : (
              props.children
            )}
            {/* {props.children} */}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default withRouter(AppLayout)
