export default [
  { path: '/html',
    // redirect: '/question/question',
    name: 'html',
    component: resolve => require(['@/view/html/index'], resolve),
    children: [
      { path: 'statichtml', name: 'statichtml', component: resolve => require(['@/view/html/statichtml'], resolve) },
      { path: 'Liquidhtml', name: 'Liquidhtml', component: resolve => require(['@/view/html/Liquidhtml'], resolve) },
      { path: 'Adaptivehtml', name: 'Adaptivehtml', component: resolve => require(['@/view/html/Adaptivehtml'], resolve) },
      { path: 'Responsivehtml', name: 'Responsivehtml', component: resolve => require(['@/view/html/Responsivehtml'], resolve) },
      { path: 'elastichtml', name: 'elastichtml', component: resolve => require(['@/view/html/elastichtml'], resolve) },
      { path: 'canvas', name: 'canvas', component: resolve => require(['@/view/html/canvas'], resolve) }
    ]
  }
]
