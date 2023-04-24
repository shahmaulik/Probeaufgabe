import ProductDetailsPageVue from '@/components/pages/ProductDetailsPage.vue';
import ProductListPageVue from '@/components/pages/ProductListPage.vue';
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "ProductListPage",
    component: ProductListPageVue,
  },
  {
    path: "/product/:id",
    name: "Product",
    component: ProductDetailsPageVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;