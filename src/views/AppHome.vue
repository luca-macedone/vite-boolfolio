<script>
import axios from 'axios';
import { store } from '../store';
import en from '../locales/en-EN/home.json';
import it from '../locales/it-IT/home.json';
export default {
    name: 'AppHome',
    data() {
        return {
            store,
            latest_projects: null,
            home_en: en,
            home_it: it,
            content: null,
            curriculum_path: 'Luca_Macedone_CV.pdf',
            technologies: [
                {
                    name: 'HTML',
                    svg: 'html5-icon.svg',
                },
                {
                    name: 'CSS',
                    svg: 'css-icon.svg',
                },
                {
                    name: 'Bootstrap',
                    svg: 'bootstrap-5-icon.svg',
                },
                {
                    name: 'JavaScript',
                    svg: 'javascript-icon.svg',
                },
                {
                    name: 'Vue 3',
                    svg: 'vuejs-icon.svg',
                },
                {
                    name: 'SASS',
                    svg: 'sass-lang-icon.svg',
                },
                {
                    name: 'PHP',
                    svg: 'php-icon.svg',
                },
                {
                    name: 'MySQL',
                    svg: 'mysql-icon.svg',
                },
                {
                    name: 'PHP MyAdmin',
                    svg: 'php-my-admin-icon.svg',
                },
                {
                    name: 'Ajax',
                    svg: 'ajax-icon.svg',
                },
                {
                    name: 'Laravel',
                    svg: 'laravel-icon.svg',
                },
            ],
        }
    },
    methods: {
        getLatestProjects(url) {
            axios
                .get(url)
                .then(result => {
                    this.latest_projects = result.data.projects;
                    // console.log(this.latest_projects);
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
            // console.log(this.content);
            this.setLocalization();
            switch (sentence) {
                case 'main_title':
                    return this.content.main_title;
                case 'main_paragraph_1':
                    return this.content.main_paragraph_1;
                case 'main_paragraph_2':
                    return this.content.main_paragraph_2;
                case 'technologies_title':
                    return this.content.technologies_title;
                case 'latest_projects':
                    return this.content.latest_projects;
                case 'carousel_button_prev':
                    return this.content.carousel_button_prev;
                case 'carousel_button_next':
                    return this.content.carousel_button_next;
                case 'watch_more_call_to_action':
                    return this.content.watch_more_call_to_action;
                case 'download_cv_call_to_action':
                    return this.content.download_cv_call_to_action;
                case 'about_me_title':
                    return this.content.about_me_title;
                case 'about_me_paragraph':
                    return this.content.about_me_paragraph;
                case 'download_cv_paragraph':
                    return this.content.download_cv_paragraph;
            }
        }
    },
    mounted() {
        let api_call = this.store.base_url + this.store.latest_projects_api;
        this.getLatestProjects(api_call);
        // console.log(this.store.base_url)
    },
}
</script>

<template>
    <!-- <section id="jumbotron">
        <div class="p-5 mb-4 jumbotron-wrapper">
            <div class="container-fluid">
                <h1 class="display-5 fw-light text-center">Welcome, <br> I'm Luca Macedone</h1>
            </div>
        </div>
    </section> -->
    <div class="container py-5">
        <div class="row g-3">
            <div class="col-12 col-xl-4 d-flex justify-content-center justify-content-xl-start">
                <div class="profile-img-wrapper">
                    <img src="../assets/images/profile_pic.JPG" class="profile-img" loading="lazy" alt="Simply me">
                </div>
            </div>
            <div class="col-12 col-xl-8 d-flex flex-column justify-content-between align-items-center">
                <div class="w-100">
                    <h1 class="fw-light text-center my-5 ">{{ getContent('main_title') }}</h1>
                    <p class=" ms-text-light fw-light text-center">
                        {{ getContent('main_paragraph_1') }}
                    </p>
                    <p class=" ms-text-light fw-light text-center">
                        {{ getContent('main_paragraph_2') }}
                    </p>
                </div>

                <div class="w-100">
                    <h2 class="ms-text-light fw-light mt-5">{{ getContent('technologies_title') }}</h2>
                    <div
                        class="technologies-wrapper d-flex justify-content-center align-items-center gap-3 flex-wrap p-3 mt-3 rounded">
                        <img :src="store.images_folder + store.svg_folder + store.technologies_folder + icon.svg"
                            class="img-fluid cursor-pointer" :alt="icon.name" v-for="icon in technologies" loading="lazy"
                            :title="icon.name">
                    </div>
                </div>
            </div>
            <div class="col-12 py-5 d-flex flex-column align-items-center">

                <h2 class="ms-text-light fw-light py-3 align-self-start">{{ getContent('latest_projects') }}</h2>

                <div id="carouselExampleControls" class="carousel slide shadow" data-bs-ride="carousel"
                    @mouseenter="latest_project_details = !latest_project_details"
                    @mouseleave="latest_project_details = !latest_project_details">
                    <div class="carousel-inner">
                        <div class="carousel-item" :class="index === 0 ? 'active' : ''"
                            v-for="(project, index) in latest_projects">
                            <img :src="store.base_url + 'storage/' + project.image" class="d-block img-fluid"
                                :alt="project.title">
                            <div
                                class="carousel-caption d-none d-md-flex flex-column justify-content-between align-items-start p-3">
                                <h4>{{ project.title }}</h4>
                                <div class="d-flex justify-content-center align-items-center flex-wrap gap-2">
                                    <span class="badge rounded-pill px-3 py-2 d-inline-flex"
                                        v-for="technology in project.technologies">
                                        {{ technology.name }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">

                        <font-awesome-icon icon="fa-solid fa-chevron-left" class="fa-3x ms-text-secondary" />
                        <span class="visually-hidden">{{ getContent('carousel_button_prev') }}</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <font-awesome-icon icon="fa-solid fa-chevron-right" class="fa-3x ms-text-secondary" />

                        <span class="visually-hidden">{{ getContent('carousel_button_next') }}</span>
                    </button>
                </div>
                <RouterLink class="call-to-action-btn mt-4" :to="{ name: 'projects' }">
                    {{ getContent('watch_more_call_to_action') }}
                </RouterLink>
            </div>
            <div class="col-12 col-lg-8">
                <h2 class="ms-text-light fw-light mt-5 mb-3">{{ getContent('about_me_title') }}</h2>
                <p class="ms-text-light fw-light">{{ getContent('about_me_paragraph') }}</p>
            </div>
            <div class="col-12 col-lg-4 d-flex flex-column justify-content-center align-items-start align-items-lg-center">
                <p class="ms-text-light fw-light p-lg-3">{{ getContent('download_cv_paragraph') }}</p>
                <a class="call-to-action-btn border-0" :href="store.base_url + store.download_api + curriculum_path">
                    {{ getContent('download_cv_call_to_action') }}
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/AppHome' as *;
</style>