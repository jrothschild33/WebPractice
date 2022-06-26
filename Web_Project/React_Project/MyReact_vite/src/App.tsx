// 作用：展示路由页面
import React, { Suspense, Fragment, ReactNode } from 'react'
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
import { IRouter, mainRouter, leftRouter, topRouter, unAuthRouter } from './router'
import AppLayout from './components/AppLayout'

// 定义可以将路由中的子孙组件抽出的函数（利用了递归原理）
const generateRouter = (routerList?: IRouter[]): ReactNode => {
  return (
    <>
      {routerList?.map((r) => {
        if (r.children) {
          return <Fragment key={r.key}>{generateRouter(r.children)}</Fragment>
        }
        return (
          <Route exact={r.exact} key={r.key} path={r.path}>
            {r.component}
          </Route>
        )
      })}
    </>
  )
}

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<></>}>
          <Switch>
            {/* 匹配主页（严格模式） */}
            <Route exact path="/">
              <AppLayout>{generateRouter(mainRouter)}</AppLayout>
            </Route>

            {/* 匹配admin */}
            <Route path="/admin">
              <AppLayout>{generateRouter(leftRouter)}</AppLayout>
            </Route>

            {unAuthRouter.map((r) => (
              <Route key={r.key} exact={r.exact} path={r.path}>
                {r.component}
              </Route>
            ))}
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  )
}
