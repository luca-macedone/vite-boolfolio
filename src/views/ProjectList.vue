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
                    // console.log(this.projects_list)
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

                <div v-else>
                    <div class="row g-4 py-3">
                        <div class="col-12 col-md-6 col-lg-4" v-for="placeholder in store.project_placeholders">
                            <div class="card h-100 rounded-0 ms-border-secondary ms-bg-light ms-text-dark shadow">
                                <img class="project_image rounded-0 border-0" height="300" alt="">
                                <div class="card-body card-img-overlay rounded-0">
                                    <div
                                        class="h-100 d-flex flex-column justify-content-between align-items-start placeholder-glow">
                                        <div class="card-title fs-4 text-uppercase placeholder"></div>
                                        <div class="d-flex flex-column align-items-start gap-3">
                                            <div class="d-flex justify-content-start align-items-center gap-2 flex-wrap">
                                                <span
                                                    class="badge rounded-pill ms-bg-secondary px-3 py-2 p-2 placeholder"></span>
                                            </div>
                                            <div class="placeholder"></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/ProjectList' as *;
</style>