import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('./pages/Dashboard/Dashboard.vue'),
    children: [
      {
        name: 'dashboardMain',
        path: '',
        component: () => import('./pages/Dashboard/DashboardMain.vue'),
      },
      {
        name: 'dashboardDetails',
        path: ':id',
        props: true,
        component: () => import('./pages/Dashboard/DashboardDetails.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
