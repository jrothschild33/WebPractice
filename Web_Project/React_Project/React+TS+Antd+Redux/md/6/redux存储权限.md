# redux存储权限

1. 定义权限

   ```typescript
   export interface IRoute {
       id: string,//唯一标识
       exact?: boolean//是否精确匹配
       path: string//路由地址
       title: string//标题
       parentId?: number//父级id
       isMenu?: number//是否是菜单
       component?: ReactNode//路由的内容主体，有于显示该条路由的内容
       routes?: IRoute[]//子路由
       redirect?: string//重定向地址
       icon?: ReactNode//图标
   }
   
   export interface PermissionState {
       loading: boolean
       permissionList: IRoute[]
   }
   ```

2. Reducer 管理权限

   ```tsx
   const initPermissionState: PermissionState = {
       loading: true,
       permissionList: []
   }
   const permission = (state: PermissionState = initPermissionState, action: PermissionAction) => {
       switch (action.type) {
           case PermissionType.GET:
               return {...state}
           case PermissionType.SET:
               return {...state, ...action.data}
           default:
               return state
       }
   }
   export default permission	
   ```

   

3. 定义action

   ```tsx
   import {PermissionType} from '../types/PermissionType';
   import {Dispatch} from 'redux'
   import {get} from "../../utils/storage";
   import {getAdminPermissionList} from "../../api/admin";
   
   export interface PermissionAction {
       type: PermissionType,
       data?: any
   }
   
   export const getPermissionList = (dispatch: Dispatch) => {
       if (get('token') !== null) {
           dispatch({
               type: PermissionType.SET,
               data: {permissionList: [], loading: true}
           });
           getAdminPermissionList().then(response => {
               const {data} = response.data
               dispatch({
                   type: PermissionType.SET,
                   data: {permissionList: data, loading: false}
               });
           })
       } else {
           dispatch({
               type: PermissionType.SET,
               data: {permissionList: [], loading: false}
           });
       }
   }
   ```

   4. Connect 将action与组件链接，登录后获得权限，并把权限存入store

      ```tsx
      // src/pages/Login.tsx
      const mapDispatchToProps = (dispatch: Dispatch) => ({
          login: (data: any) => {
              doLogin(dispatch, data)
          },
          getAdminInfo: () => {
              syncAdminInfo(dispatch)
          },
          getPermissionList: () => {
              getPermissionList(dispatch)
          }
      }
      export default connect(null, mapDispatchToProps)(withRouter(Login))
      
      ```

同理用户登录也是按照这个流程，读者可以看登录的代码
