export default [
  { path: '/html',
    // redirect: '/question/question',
    name: 'html',
    component: resolve => require(['@/view/html/index'], resolve),
    children: [
      { path: 'canvas', name: 'canvas', component: resolve => require(['@/view/html/canvas'], resolve) }
    ]
  }
]
