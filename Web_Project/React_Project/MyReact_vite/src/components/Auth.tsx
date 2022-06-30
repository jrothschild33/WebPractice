import React, { FC, ReactNode, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '@store'

type Props = {
  path: string
  children?: ReactNode
}

const Auth: FC<Props> = observer(({ path, children }) => {
  const { permissionStore } = useStore()
  useEffect(() => {
    permissionStore.initPermission()
  }, [permissionStore])

  let auth: boolean = false
  // 在当前用户的所有权限中查一下是否有path="deleteRole"
  for (let p of permissionStore.permissionList) {
    // 如果有的话，代表拥有删除角色的权限
    if (p.path === path) {
      auth = true
      break
    }
  }
  return auth ? <>{children}</> : null
})

export default Auth
