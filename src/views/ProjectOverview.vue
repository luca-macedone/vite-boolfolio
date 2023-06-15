<script>
import { RouterLink } from 'vue-router';
import { store } from '../store';
import axios from 'axios';
export default {
    name: "ProjectOverview",
    data() {
        return {
            store,
            single_project_url: store.base_url + store.projects_api + this.$route.params.slug,
            project_overview: null,
        };
    },
    methods: {
        getProjectOverview(url) {
            axios
                .get(url)
                .then(result => {
                    if (result.data.status) {
                        this.project_overview = result.data.project;
                        // console.log(this.project_overview);
                        console.log(result.data.status);
                    } else {
                        this.$router.push({ name: 'not-found' })
                    }
                })
                .catch(error => {
                    console.error(error);
                })
        },
    },
    mounted() {
        this.getProjectOverview(this.single_project_url);
        // console.log(this.single_project_url);
    },
    components: { RouterLink }
}
</script>

<template>
    <div v-if="project_overview">
        <!-- {{ store.project_overview.title }} -->
        <div class="container">
            <div class="row">
                <div class="col background shadow"
                    :style="`background-image: url(${store.base_url + 'storage/' + project_overview.image});`"
                    v-if="project_overview.image !== null">
                </div>
                <div class="col h-100">
                    <div class="px-3 py-3">
                        <h1 class="display-5 text-center ms-text-light mb-3" id="title">
                            {{ project_overview?.title }}
                        </h1>
                        <div class="d-flex justify-content-between align-items-center gap-3 pb-2">
                            <div class="d-flex justify-content-start align-items-baseline gap-3">
                                <div class="text-center ms-text-light fs-5 mb-2" id="type">
                                    {{ project_overview.type.name }}
                                </div>
                            </div>
                            <div class="d-flex gap-2">
                                <div class="badge rounded-pill ms-bg-secondary fw-light px-4 py-2"
                                    v-for="technology in project_overview.technologies">
                                    {{ technology.name }}
                                </div>
                            </div>
                        </div>
                        <p class="ms-text-light fw-light" id="description">
                            {{ project_overview?.description }}
                        </p>
                        <div class="d-flex flex-column justify-content-between align-items-start gap-1">
                            <div class="ms-text-light fw-light">
                                Year of development:
                                <span class="fw-semibold ms-text-secondary fs-5 ms-3">
                                    {{ project_overview?.year_of_development }}
                                </span>
                            </div>
                            <div class="ms-text-light fw-light">
                                Developer:
                                <span class="fw-semibold ms-text-secondary fs-5 ms-3">
                                    {{ project_overview?.user.name }}
                                </span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center py-4"
                            v-if="project_overview.repository_url || project_overview.website_url">
                            <a class="rounded-0 px-5 py-3" :href="project_overview.repository_url" type="button"
                                id="repository" v-if="project_overview.repository_url">
                                Repository
                            </a>
                            <a class="rounded-0 px-5 py-3" :href="project_overview.website_url" type="button" id="website"
                                v-if="project_overview.website_url">
                                Website
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="vh-100 vw-100 ms-bg-tertiary d-flex justify-content-center align-items-center" v-else>
        <h1 class="ms-text-light">Loading...</h1>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/ProjectOverview' as *;
</style>