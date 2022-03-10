/* eslint-disable */
import {
  createRouter,
  createWebHashHistory
} from "vue-router";

const routes = [
  // 前台路由結構
  {
    path: "/",
    component: () =>
      import("../views/FrontView.vue"),
    // 前台巢狀路由
    children: [{
        path: "home",
        component: () =>
          import("../views/HomeView.vue"),
      },
      {
        path: "products",
        component: () =>
          import("../views/ProductsView.vue"),
      },
      {
        path: "product/:id",
        component: () =>
          import("../views/ProductView.vue"),
      },
      {
        path: "cart",
        component: () =>
          import("../views/CartView.vue"),
      },
    ]
  },

  // 後台路由結構
  {
    path: "/admin",
    component: () =>
      import("../views/DashboardView/DashboardView.vue"),
    // 後台巢狀路由
    children: [{
      path: "product",
      component: () =>
        import("../views/DashboardView/AdminProductView.vue"),
    }, ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
});

export default router;