<script>
import axios from 'axios';
import { store } from '../store';
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
            ]
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
    },
    mounted() {
        let api_call = this.store.base_url + this.store.latest_projects_api;
        this.getLatestProjects(api_call);
    }
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
            <div class="col-12 col-lg-4 d-flex justify-content-center align-items-center">
                <div class="profile-img-wrapper mx-5 mt-4">
                    <img src="../assets/images/profile_pic.JPG" class="profile-img" alt="Simply me">
                </div>
            </div>
            <div class="col-12 col-lg-8 d-flex flex-column justify-content-between align-items-center">
                <div class="w-100">
                    <h1 class="fw-light text-center py-4 ">Hi! I'm Luca Macedone</h1>
                    <p class=" ms-text-light fw-light">
                        I'm a <span class="fs-5">Jr. FullStack Web Developer</span>
                        and i'm always in search of new motivations for develop my skills. <br />
                        I'm born in August '97, in Imperia, Liguria.
                    </p>
                </div>

                <div class="w-100">
                    <h3 class="ms-text-light mt-5">Technologies</h3>
                    <div
                        class="technologies-wrapper d-flex justify-content-center align-items-center gap-3 flex-wrap p-3 my-3 shadow rounded">
                        <img :src="store.images_folder + icon.svg" class="img-fluid" :alt="icon.name"
                            v-for="icon in technologies" loading="lazy" :title="icon.name">
                    </div>
                </div>
            </div>
            <div class="col-12 p-5 d-flex flex-column align-items-center">

                <h2 class="ms-text-light fw-light py-3 align-self-start">My latest projects</h2>

                <div id="carouselExampleControls" class="carousel slide shadow" data-bs-ride="carousel"
                    @mouseenter="latest_project_details = !latest_project_details"
                    @mouseleave="latest_project_details = !latest_project_details">
                    <div class="carousel-inner">
                        <div class="carousel-item active" v-for="project in latest_projects">
                            <img :src="store.base_url + 'storage/' + project.image" class="d-block w-100"
                                :alt="project.title" loading="lazy">
                            <div
                                class="carousel-caption d-none d-md-flex flex-column justify-content-between align-items-start p-3">
                                <h4>{{ project.title }}</h4>
                                <div class="d-flex justify-content-center py-3 align-items-center gap-2 flex-wrap">
                                    <span class="badge rounded-pill px-3 py-2 p-2"
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
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <font-awesome-icon icon="fa-solid fa-chevron-right" class="fa-3x ms-text-secondary" />

                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <RouterLink class="call-to-action-btn mt-4" :to="{ name: 'projects' }">
                    See more
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/AppHome' as *;
</style>