import React, { Component } from 'react'

import View from './componments/View'
import { inject, observer } from 'mobx-react'
import { AdminStore } from './store/AdminStore'
import PermissionStore from './store/PermissionStore'

interface IProps {
  adminStore?: AdminStore
  permissionStore?: PermissionStore
}

@inject('adminStore', 'permissionStore')
@observer
class App extends Component<IProps> {
  componentDidMount() {
    this.props.adminStore?.initAdmin()
    this.props.permissionStore?.initPermission()
  }

  render() {
    return (
      <>
        <View />
      </>
    )
  }
}

export default App
