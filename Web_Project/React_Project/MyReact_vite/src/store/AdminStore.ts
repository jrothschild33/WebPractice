// 作用：获取管理员信息：getAdminInfo
import React, { Component } from 'react'
import { action, observable, makeObservable, runInAction } from 'mobx'
import { clear, set } from '@utils/storage'
import { getAdminInfo } from '@api/admin'

interface IAdmin {
  id: number
  name: string
  avatar: string
}

export default class AdminStore {
  @observable public admin: IAdmin = { id: 0, name: '', avatar: '' }

  constructor(admin: IAdmin = { id: 0, name: 'admin', avatar: '' }) {
    this.admin = admin
    makeObservable(this)
  }

  @action public logOut = () => {
    this.admin = { id: 0, name: '', avatar: '' }
    clear()
  }

  @action public login = (token: string) => {
    set('token', token)
  }

  initAdmin = async () => {
    const admin = await getAdminInfo().then((response) => {
      return response.data.data
    })
    runInAction(() => {
      this.admin = admin
    })
  }
}
