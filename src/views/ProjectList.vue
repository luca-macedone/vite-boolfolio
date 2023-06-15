<script>
import ProjectCard from '../components/ProjectCard.vue';
import { store } from '../store';
import axios from 'axios';
export default {
    name: 'ProjectList',
    components: {
        ProjectCard,
    },
    data() {
        return {
            store,
            projects_url: store.base_url + store.projects_api,
            projects_list: null,
        }
    },
    methods: {
        getProjects(url) {
            axios
                .get(url)
                .then(result => {
                    this.projects_list = result.data.projects.data;
                    console.log(this.projects_list)
                })
                .catch(error => {
                    console.error(error);
                })
        },
    },
    mounted() {
        this.getProjects(this.projects_url);
    },
}
</script>

<template>
    <main>
        <section class="">
            <div class="container py-5">
                <h1 class="ms-text-light py-3">My projects</h1>
                <div class="row g-4" v-if="projects_list">
                    <ProjectCard :data="project" v-for="project in projects_list" />
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/ProjectList' as *;
</style>