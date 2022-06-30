import { useContext, createContext } from 'react'
import PermissionStore from './PermissionStore'
import AdminStore from './AdminStore'
import UserStore from './UserStore'

interface CommonContext {
  permissionStore: PermissionStore
  adminStore: AdminStore
  userStore: UserStore
}

const context: CommonContext = {
  permissionStore: new PermissionStore(),
  adminStore: new AdminStore(),
  userStore: new UserStore(),
}

const Store = createContext(context)

export function useStore<T = {}>() {
  return useContext(Store) as CommonContext & T
}
