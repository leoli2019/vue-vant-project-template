const userModule = {
  name: 'user',
  meta: {
    title: '会员中心'
  },
  component: () => import('@/views/user')
}
export default userModule
