import Projects from "@/pages/projects/Projects.vue";
import Home from "@/pages/home/Home.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import About from "@/pages/about/About.vue";
import Contact from "@/pages/contact/Contact.vue";



export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ]
})