const vantDemoModule = [
  {
    name: 'cart',
    meta: {
      title: '购物车'
    },
    component: () => import('@/views/shop-demo/cart')
  },
  {
    name: 'goods',
    meta: {
      title: '商品详情'
    },
    component: () => import('@/views/shop-demo/goods')
  },
  {
    name: 'user',
    meta: {
      title: '会员中心'
    },
    component: () => import('@/views/shop-demo/user')
  }
]
export default vantDemoModule