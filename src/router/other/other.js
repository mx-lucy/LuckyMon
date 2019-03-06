export default [
  { path: '/other',
    // redirect: '/question/question',
    name: 'other',
    component: resolve => require(['@/view/other/index'], resolve),
    children: [
      { path: 'explain', name: 'explain', component: resolve => require(['@/view/other/explain'], resolve) },
      { path: 'http', name: 'http', component: resolve => require(['@/view/other/http'], resolve) }
    ]
  }
]
