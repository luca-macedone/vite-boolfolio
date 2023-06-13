<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue'

export default {
    components: {
        ProjectCard,
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
    <section class="">
        <div class="container">
            <div class="row" v-if="projects_list">
                <div class="col" v-for="project in projects_list">
                    {{ project.title }}
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
