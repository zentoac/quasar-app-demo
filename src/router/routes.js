
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue'),
        meta: {
          title: 'Home',
        }
      },
      {
        path: '/users',
        component: () => import('pages/Users.vue'),
        meta: {
          title: 'Users',
        }
      },
      {
        path: '/create-user',
        component: () => import('pages/CreateUser.vue'),
        meta: {
          title: 'Create User',
        }
      },
      {
        path: '/edit-user',
        component: () => import('pages/EditUser.vue'),
        props: route => ({ user: route.query.user }),
        meta: {
          title: 'Edit User',
        }
      },
      {
        path: '/roles',
        component: () => import('pages/Roles.vue'),
        meta: {
          title: 'Roles',
        }
      },
      {
        path: '/create-role',
        component: () => import('pages/CreateRole.vue'),
        meta: {
          title: 'Create Role',
        }
      },
      {
        path: '/edit-role',
        component: () => import('pages/EditRole.vue'),
        props: route => ({ role: route.query.role }),
        meta: {
          title: 'Edit Role',
        }
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
