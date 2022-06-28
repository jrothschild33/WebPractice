import { IRouter, router } from '../router'
import { Breadcrumb } from 'antd'
import React, { FC, Fragment, ReactNode, useCallback } from 'react'
import { matchPath, RouteComponentProps, withRouter } from 'react-router-dom'

interface Props extends RouteComponentProps {}

const SubTitle: FC<Props> = (props: Props) => {
  // 根据router动态生成面包屑导航
  /* const generateSubTitle = useCallback((routerList: IRouter[]): ReactNode => {
    // 记得用withRouter包裹
    let path = props.location.pathname
    return (
      <>
        {routerList.map((r) => {
          let match = matchPath(path, { path: r.path })
          if (match) {
            return (
              <Fragment key={r.key}>
                <Breadcrumb.Item key={r.key}>{r.title}</Breadcrumb.Item>
                {r.children ? generateSubTitle(r.children) : null}
              </Fragment>
            )
          }
          return null
        })}
      </>
    )
  }, []) */

  const generateSubTitle = (routerList: IRouter[]): ReactNode => {
    // 记得用withRouter包裹
    let path = props.location.pathname
    return (
      <>
        {routerList.map((r) => {
          let match = matchPath(path, { path: r.path })
          if (match) {
            return (
              <Fragment key={r.key}>
                <Breadcrumb.Item key={r.key}>{r.title}</Breadcrumb.Item>
                {r.children ? generateSubTitle(r.children) : null}
              </Fragment>
            )
          }
          return null
        })}
      </>
    )
  }

  return <Breadcrumb style={{ margin: '16px 0' }}>{generateSubTitle(router)}</Breadcrumb>
}

export default withRouter(SubTitle)
