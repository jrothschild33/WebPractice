// 作用：取回管理员的角色权限数据：getAdminPermissionList

import React, { Component } from 'react'
import { action, observable, makeObservable, runInAction } from 'mobx'
import { IRouter } from '@router'
import { getAdminPermissionList } from '@api/permission'

export default class PermissionStore {
  constructor() {
    makeObservable(this)
  }

  @observable public permissionList: IRouter[] = []
  @observable public state: string = 'loading'
  @observable public loginAuth: boolean = false

  // @action public initPermission = async () => {
  initPermission = async () => {
    const permissionList = await getAdminPermissionList().then((res) => {
      return res.data.data
    })
    // runInAction是mobx用来处理异步函数的
    runInAction(() => {
      this.permissionList = permissionList
      this.state = 'success'
      this.loginAuth = true
    })
  }
}
