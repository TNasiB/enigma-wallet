import { createRouter, createWebHistory } from "vue-router";
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

const routes = [
  {
    name: "homepage",
    path: "/",
    component: () => import("../views/HomePage.vue"),
  },
  {
    name: "auth",
    path: "/auth",
    component: () => import("../views/AuthPage.vue"),
  },
  {
    name: "qr-reader",
    path: "/scan",
    component: () => import("../views/QrCodeScanner.vue"),
  },
  {
    name: "user-profile",
    path: "/profile/:address",
    props: true,
    component: () => import("../views/UserProfile.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  const apiKey = cookies.get("access-token");
  if (to.name === "auth") return true;
  else if (apiKey === null) return { name: "auth" };
  else {
    return true;
  }
});

export default router;
