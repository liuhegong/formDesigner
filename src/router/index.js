import Vue from 'vue'
import VueRouter from 'vue-router'
import designer from '@/components/formDesigner'
import dialogTest from '@/pages/dialogTest'
import queryDialogTest from '@/pages/queryDialogTest'
import view from '@/pages/view'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'designer',
    component: designer
  },{
    path: '/dialog',
    name: 'dialogTest',
    component: dialogTest
  },{
    path: '/queryDialog',
    name: 'queryDialogTest',
    component: queryDialogTest
  },{
    path: '/view',
    name: 'view',
    component: view
  }
]

const router = new VueRouter({
  routes
})

export default router
