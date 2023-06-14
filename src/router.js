import { createRouter, createWebHistory } from "vue-router";

import AppHome from './views/AppHome.vue';
import ProjectList from './views/ProjectList.vue';
import ContactsPage from './views/ContactsPage.vue';
import ProjectOverview from './views/ProjectOverview.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectList,
        },
        {
            path: '/projects/:slug',
            name: 'project-overview',
            component: ProjectOverview,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsPage,
        },
    ]
});

export { router };