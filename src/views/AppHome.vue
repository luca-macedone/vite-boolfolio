<script>
import axios from 'axios';
import { store } from '../store';
import en from '../locales/en.json';
import it from '../locales/it.json';
export default {
    name: 'AppHome',
    data() {
        return {
            store,
            latest_projects: null,
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
                    name: 'Laravel',
                    svg: 'laravel-icon.svg',
                },
            ],
            home_en: en.home,
            home_it: it.home,
            content: null,
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
                case 'call_to_action_button':
                    return this.content.call_to_action_button;
            }
        }
    },
    mounted() {
        let api_call = this.store.base_url + this.store.latest_projects_api;
        this.getLatestProjects(api_call);
        // console.log(this.home)
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
        <div class="row">
            <div class="col-12 col-xl-4 d-flex justify-content-center justify-content-xl-start">
                <div class="profile-img-wrapper">
                    <img src="../assets/images/profile_pic.JPG" class="profile-img" alt="Simply me">
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
                        <img :src="store.images_folder + icon.svg" class="img-fluid cursor-pointer" :alt="icon.name"
                            v-for="icon in technologies" loading="lazy" :title="icon.name">
                    </div>
                </div>
            </div>
            <div class="col-12 py-5 d-flex flex-column align-items-center">

                <h2 class="ms-text-light fw-light py-3 align-self-start">{{ getContent('latest_projects') }}</h2>

                <div id="carouselExampleControls" class="carousel slide shadow" data-bs-ride="carousel"
                    @mouseenter="latest_project_details = !latest_project_details"
                    @mouseleave="latest_project_details = !latest_project_details">
                    <div class="carousel-inner">
                        <div class="carousel-item active" v-for="project in latest_projects">
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
                    {{ getContent('call_to_action_button') }}
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/AppHome' as *;
</style>