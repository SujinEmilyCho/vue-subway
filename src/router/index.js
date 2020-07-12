import Vue from 'vue';
import VueRouter from 'vue-router';

import AdminHome from '../views/admin/AdminHome';
import AdminStation from '../views/admin/AdminStation';
import AdminLine from '../views/admin/AdminLine';
import AdminEdge from '../views/admin/AdminEdge';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: AdminHome },
    { path: '/stations', component: AdminStation },
    { path: '/lines', component: AdminLine },
    { path: '/edges', component: AdminEdge },
  ],
});

export default router;
