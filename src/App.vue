<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default {
    components: {
        ProjectCard,
        ProjectCard
    },
    data() {
        return {
            base_url: 'http://127.0.0.1:8000/',
            projects_api: 'api/projects/',
            projects_list: null,
        }
    },
    methods: {
        getData(url) {
            axios
                .get(url)
                .then(result => {
                    this.projects_list = result.data.projects.data;
                    // console.log(this.projects_list)
                })
                .catch(error => {
                    console.error(error);
                })
        }
    },
    mounted() {
        let projects_url = this.base_url + this.projects_api;
        this.getData(projects_url);
    }
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark ms-bg-secondary">
            <div class="container">
                <a class="navbar-brand" href="#">Luca Macedone</a>
                <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" href="#" aria-current="page">Home <span
                                    class="visually-hidden">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    </header>
    <main>
        <section class="">
            <div class="container py-5">
                <h1 class="ms-text-light py-3">My projects</h1>
                <div class="row g-4" v-if="projects_list">
                    <!-- <div class="col" v-for="project in projects_list">
                        {{ project.title }}
                    </div> -->
                    <ProjectCard :data="project" v-for="project in projects_list" />
                </div>
            </div>
        </section>
    </main>
    <footer class="ms-bg-secondary py-5 ms-text-light">
        <div class="container">
            <div class="row">
                <ul class="list-unstyled">
                    <li class="">
                        <a class="nav-link" href="#">some text</a>
                    </li>
                    <li class="">
                        <a class="nav-link" href="#">some text</a>
                    </li>
                    <li class="">
                        <a class="nav-link" href="#">some text</a>
                    </li>
                    <li class="">
                        <a class="nav-link" href="#">some text</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
@use './styles/partials/ProjectList' as *;
</style>
