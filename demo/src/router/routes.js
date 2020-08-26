
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/users', component: () => import('pages/Users.vue') },
      { path: '/roles', component: () => import('pages/Roles.vue') },
      { path: '/create-role', component: () => import('pages/CreateRole.vue') },
      { path: '/edit-role', component: () => import('pages/EditRole.vue'), props: route => ({ role: route.query.role }), },
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
