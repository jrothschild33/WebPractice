const leftRouter = [
  {
    path: '/admin/user',
    title: '用户管理',
    icon: 'userIcon',
    key: 'user',
    children: [
      {
        path: '/admin/user/list',
        title: '用户列表',
        icon: 'userIcon',
        key: 'userlist',
        component: 'UserListComponent',
      },
    ],
  },

  {
    path: '/admin/admin',
    title: '管理员管理',
    icon: 'userIcon',
    key: 'admin',
    children: [
      {
        path: '/admin/admin/list',
        title: '管理员列表',
        icon: 'userIcon',
        key: 'adminList',
        component: 'AdminListComponent',
      },
    ],
  },
]

function getItem(label, key, icon, children, type) {
  return { key, icon, children, label, type }
}

function generateMenu(routerList) {
  return routerList.map((r) => {
    if (r.children) {
      return getItem(r.path, r.key, r.icon, [generateMenu(r.children)])
    }
  })
}

console.log(generateMenu(leftRouter))
