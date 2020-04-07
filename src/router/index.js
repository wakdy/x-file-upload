import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    { path: '/form', component: ()=>import('@components/Form') },
    { path: '/FormData', component: ()=>import('@components/FormData') },
    { path: '/Blob', component:()=>import('@components/Blob')}
  ];

const router = new VueRouter({
    routes
  });
export default router;