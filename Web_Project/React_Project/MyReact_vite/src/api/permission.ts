// 作用：获取当前管理员的权限（能否修改角色等）

import request from '@utils/request'

// 添加新角色：展示所有可选权限
export const getAllPermission = () => {
  return request({
    url: '/admin/permission/list',
  })
}

//
export const getAdminPermissionList = () => {
  return request({
    url: 'admin/admin/permission',
  })
}

// 返回的角色权限数据格式
/* "data": [
  {
      "id": 1,                                // 共18个id
      "createdAt": "2022-06-23 15:29:56",
      "updatedAt": "2022-06-23 15:29:56",
      "deletedAt": "",
      "apiPath": "",                          // Axios请求URL路径
      "rule": "",                             // 传递params、search、state参数
      "method": "GET",
      "title": "仪表盘",                      // 对应的侧边栏选项
      "parentId": 0,                          // 父级对应的id，范围0~17，如果是0代表是最外层的路由
      "isMenu": 1,                            // 是否为菜单栏，0代表不是，1代表是
      "path": "/admin/index"                  // 前端路由路径
  },
] */
