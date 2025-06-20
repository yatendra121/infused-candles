import { createRouter, createWebHistory } from 'vue-router';
import Contact from './Contact.vue';
import Main from './Main.vue';
import About from './About.vue';
import Shop from './Shop.vue';
import SingleProduct from './SingleProduct.vue';


// Define Routes
const routes = [
  { path: '/', component: Main },
  { path: '/Contact', component: Contact },
  { path: '/About', component: About },
  { path: '/Shop', component: Shop },
  { path: '/product', component: SingleProduct },


];

// Create Router
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
