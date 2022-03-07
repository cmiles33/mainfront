import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from "@/views/ProductView";
import CollectionView from "@/views/CollectionView";
import AllCollectionView from "@/views/AllCollectionView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/view-product/:id/:slug',
    name: 'product.show',
    component: ProductView,
    props: true,
  },
  {
    path: '/view-collection/:id/:slug',
    name: 'collection.show',
    component: CollectionView,
    props: true,
  },
  {
    path: "/view-collection",
    name: 'collection.show_all',
    component: AllCollectionView,
    props: true,
  }


]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
