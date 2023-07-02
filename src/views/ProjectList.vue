<script>
import ProjectCard from '../components/ProjectCard.vue';
import { store } from '../store';
import axios from 'axios';
import en from '../locales/en-EN/projects.json';
import it from '../locales/it-IT/projects.json';
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
            current_page__number: 0,
            // last_page__number: 0,
            first_page__url: null,
            last_page__url: null,
            prev_page__url: null,
            next_page__url: null,
            total_projects: 0,
            home_en: en,
            home_it: it,
            content: null,

        }
    },
    methods: {
        getProjects(url) {
            axios
                .get(url)
                .then(result => {
                    this.projects_list = result.data.projects.data;
                    // this.current_page__number = result.data.project.current_page;
                    // this.last_page__number = result.data.project.current_page;
                    this.first_page__url = result.data.projects.first_page_url;
                    // console.log(this.first_page__url);
                    this.last_page__url = result.data.projects.last_page_url;
                    // console.log(this.last_page__url);
                    this.prev_page__url = result.data.projects.prev_page_url;
                    // console.log(this.prev_page__url);
                    this.next_page__url = result.data.projects.next_page_url;
                    // console.log(this.next_page__url);
                    this.total_projects = result.data.projects.total;
                    this.current_page__number = result.data.projects.current_page;
                    // console.log(this.projects_list)
                })
                .catch(error => {
                    console.error(error);
                })
        },
        setLocalization() {
            if (store.localization_input) {
                // true --> italian
                this.content = this.home_it
            } else {
                // false --> english
                this.content = this.home_en
            }
        },
        getContent(sentence) {
            this.setLocalization();
            switch (sentence) {
                case 'project_list_title':
                    return this.content.project_list_title;
            }
        }
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
                <h1 class="ms-text-light py-3">{{ getContent('project_list_title') }}</h1>
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
            <div class="w-100 d-flex justify-content-center align-items-center" v-if="next_page__url || prev_page__url">
                <nav aria-label="Page navigation example">
                    <ul class="pagination ms-pagination">
                        <!-- Previous Page -->
                        <li class="page-item ms-pagination-item" v-if="prev_page__url">
                            <a class="page-link ms-pagination-link" @click="getProjects(prev_page__url)" aria-label="Prev">
                                <!-- <span aria-hidden="true">&laquo;</span> -->
                                <font-awesome-icon aria-hidden="true" icon="fa-solid fa-chevron-left" />
                            </a>
                        </li>
                        <li class="page-item ms-pagination-item" v-if="prev_page__url"><a
                                class="page-link ms-pagination-link rounded-0" @click="getProjects(prev_page__url)">{{
                                    current_page__number - 1 }}</a></li>
                        <!-- Current Page -->
                        <li class="page-item ms-pagination-item"><a class="page-link ms-pagination-link rounded-0">
                                {{ current_page__number }}</a>
                        </li>
                        <!-- Next Page -->
                        <li class="page-item ms-pagination-item" v-if="next_page__url"><a
                                class="page-link ms-pagination-link rounded-0" @click="getProjects(next_page__url)">{{
                                    current_page__number + 1 }}</a></li>
                        <li class="page-item ms-pagination-item" v-if="next_page__url">
                            <a class="page-link ms-pagination-link" @click="getProjects(next_page__url)" aria-label="Next">
                                <!-- <span aria-hidden="true">&raquo;</span> -->
                                <font-awesome-icon aria-hidden="true" icon="fa-solid fa-chevron-right" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/ProjectList' as *;
</style>