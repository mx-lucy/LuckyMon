export default [
  { path: '/js',
    // redirect: '/question/question',
    name: 'js',
    component: resolve => require(['@/view/js/index'], resolve),
    children: [
      { path: 'earth', name: 'earth', component: resolve => require(['@/view/js/earth'], resolve) },
      { path: 'Carousel', name: 'Carousel', component: resolve => require(['@/view/js/Carousel'], resolve) },
      { path: 'getRegex', name: 'getRegex', component: resolve => require(['@/view/js/getRegex'], resolve) },
      { path: 'echarts', name: 'echarts', component: resolve => require(['@/view/js/echarts'], resolve) }
    ]
  }
]
