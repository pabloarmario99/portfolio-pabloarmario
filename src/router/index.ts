import Home from "@/pages/home/Home.vue";
import About from "@/pages/visitor/About.vue";
import Character from "@/pages/visitor/Character.vue";
import Collection from "@/pages/visitor/Collection.vue";
import Contact from "@/pages/visitor/Contact.vue";
import Layout from "@/pages/visitor/Layout.vue";
import Godnews from "@/pages/visitor/projects/Godnews.vue";
import Jaime from "@/pages/visitor/projects/Jaime.vue";
import Mindland from "@/pages/visitor/projects/Mindland.vue";
import Projects from "@/pages/visitor/projects/Projects.vue";

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
            name: 'project-general',
            component: Projects 
            },
            {
            path: 'godnews!',
            name: 'project-godnews!',
            component: Godnews,
            },
            {
            path: 'jaime',
            name: 'project-jaime',
            component: Jaime,
            },
            {
            path: 'mindland',
            name: 'project-mindland',
            component: Mindland,
            },
          ]
        },
        {
          path: 'character',
          component: Layout,
          children: [
            {
             path: '',
            name: 'all-characters',
            component: Collection 
            },
            {
             path: ':id',
            name: 'characters-details',
            component: Character 
            }
          ]
        },
        {
          path: 'about',
          component: Layout,
          children: [
            {
             path: '',
            name: 'about',
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
            name: 'contact',
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