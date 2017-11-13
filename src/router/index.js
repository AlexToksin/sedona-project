import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Form from '@/components/form'
import Photo from '@/components/photo'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
      {
          path: '/form',
          name: 'Form',
          component: Form
      },
        {
          path: '/form/photo',
          name: 'Photo',
          component: Photo
        }
  ]
})
