import { createRouter, createWebHistory } from "vue-router";

//Pages
import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import Page404 from './pages/Page404.vue';
import SingleProject from './pages/SingleProject.vue'

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage,
        },
        {
            path: '/chi-siamo',
            name: 'about-us',
            component: AboutUs,
        },
        {
            path: '/blog/:slug',
            name: 'single-project',
            component: SingleProject,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'page-404',
            component: Page404,
        },
    ],
});

export default router;