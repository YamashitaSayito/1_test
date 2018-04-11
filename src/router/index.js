import Vue from 'vue'
import Router from 'vue-router'
import Cont from 'components/cont'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cont',
      component: Cont
    }
  ]
})
