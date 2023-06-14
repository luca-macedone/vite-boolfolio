<script>
import ProjectCard from '../components/ProjectCard.vue';
import { store } from '../store';
export default {
    name: 'ProjectList',
    components: {
        ProjectCard,
    },
    data() {
        return {
            store,
            projects_url: store.base_url + store.projects_api,
        }
    },
    mounted() {
        this.store.getProjects(this.projects_url);
    },
}
</script>

<template>
    <main>
        <section class="">
            <div class="container py-5">
                <h1 class="ms-text-light py-3">My projects</h1>
                <div class="row g-4" v-if="store.projects_list">
                    <ProjectCard :data="project" v-for="project in store.projects_list" />
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/ProjectList' as *;
</style>