import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/inicio",
  },
  {
    path: "/inicio",
    component: () => import("@/views/InicioPage.vue"),
  },
  {
    path: "/folder/:id",
    component: () => import("@/views/FolderPage.vue"),
  },
  {
    path: "/experiencia",
    component: () => import("../views/ExperienciaPage.vue"),
  },
  {
    path: "/sumadora",
    component: () => import("../views/SumadoraPage.vue"),
  },
  {
    path: "/tabla",
    component: () => import("../views/TablaPage.vue"),
  },
  {
    path: "/traductor",
    component: () => import("../views/TraductorPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
