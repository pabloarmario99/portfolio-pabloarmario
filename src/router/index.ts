import Home from "@/pages/home/Home.vue";
import About from "@/pages/visitor/About.vue";
import Contact from "@/pages/visitor/Contact.vue";
import Layout from "@/pages/visitor/Layout.vue";
import Projects from "@/pages/visitor/Projects.vue";

import { createRouter, createWebHashHistory } from "vue-router";


export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/visitor',
      children: [
        {
          path: 'projects',
          component: Layout,
          children: [
            {
             path: '',
            name: 'visitor-projects',
            component: Projects 
            }
          ]
        },
        {
          path: 'about',
          component: Layout,
          children: [
            {
             path: '',
            name: 'visitor-about',
            component: About 
            }
          ]
        },
        {
          path: 'contact',
          component: Layout,
          children: [
            {
             path: '',
            name: 'visitor-contact',
            component: Contact
            }
          ]
        },
      ]
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ]
})