export default [
  { path: '/css',
    // redirect: '/question/question',
    name: 'css',
    component: resolve => require(['@/view/css/index'], resolve),
    children: [
      { path: 'change', name: 'change', component: resolve => require(['@/view/css/change'], resolve) },
      { path: 'compatibility', name: 'compatibility', component: resolve => require(['@/view/css/compatibility'], resolve) }
    ]
  }
]
