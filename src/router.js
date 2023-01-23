import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutUs from "./pages/AboutUs.vue";
import ProjectsList from "./pages/ProjectsList.vue";
import SingleProject from "./pages/SingleProject.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: "home",
            component: HomePage,
        },

        {
            path: '/about-us',
            name: 'about',
            component: AboutUs,
        },
        {
            path: "/projects/:slug",
            name: "single-project",
            component: SingleProject,
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsList,
        }
    ],
});

export { router };