<script>
import { RouterLink } from 'vue-router';
import { store } from '../store';
import axios from 'axios';
import en from '../locales/en.json';
import it from '../locales/it.json';
export default {
    name: "ProjectOverview",
    data() {
        return {
            store,
            single_project_url: store.base_url + store.projects_api + this.$route.params.slug,
            project_overview: null,
            image_modal: false,
            project_overview_en: en.project_overview,
            project_overview_it: it.project_overview,
            content: null,
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
                        // console.log(result.data.status);
                    } else {
                        this.$router.push({ name: 'not-found' })
                    }
                })
                .catch(error => {
                    console.error(error);
                })
        },
        setLocalization() {
            if (store.localization_input) {
                // true --> italian
                this.content = this.project_overview_it
            } else {
                // false --> english
                this.content = this.project_overview_en
            }
        },
        getContent(sentence) {
            this.setLocalization();
            switch (sentence) {
                case 'loading_sentence':
                    return this.content.loading_sentence;
                case 'repository_button':
                    return this.content.repository_button;
                case 'website_button':
                    return this.content.website_button;
                case 'year_of_development_sentence':
                    return this.content.year_of_development_sentence;
                case 'developer_sentence':
                    return this.content.developer_sentence;

            }
        }
    },
    mounted() {
        this.getProjectOverview(this.single_project_url);
        // console.log(this.single_project_url);
    },
    components: { RouterLink }
}
</script>

<template>
    <div class="py-5" v-if="project_overview">

        <!-- Image Modal -->
        <div class="wrapper d-flex justify-content-center align-items-center"
            :class="image_modal ? 'd-inline-flex' : 'd-none'">
            <div class="ms-modal">
                <button class="btn close-btn" @click="image_modal = !image_modal">
                    <font-awesome-icon icon="fa-solid fa-x" class="fa-2x p-2" />
                </button>
                <div class="ms-modal-img-wrapper">
                    <img :src="store.base_url + 'storage/' + project_overview.image" :alt="project_overview.title"
                        class="ms-modal-img" loading="lazy">

                </div>
            </div>
        </div>

        <!-- Main Content -->
        <section class="container">
            <div class="row row-cols-1 row-cols-xl-2">
                <div class="col background shadow d-flex justify-content-center align-items-center"
                    :style="`background-image: url(${store.base_url + 'storage/' + project_overview.image});`"
                    v-if="project_overview.image !== null" @click="image_modal = !image_modal">

                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="zoom-icon fa-2x ms-text-dark" />

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
                                {{ getContent('year_of_development_sentence') }} :
                                <span class="fs-5 ms-3" id="year">
                                    {{ project_overview?.year_of_development }}
                                </span>
                            </div>
                            <div class="ms-text-light fw-light">
                                {{ getContent('developer_sentence') }} :
                                <span class="fs-5 ms-3" id="author">
                                    {{ project_overview?.user.name }}
                                </span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center py-4"
                            v-if="project_overview.repository_url || project_overview.website_url">
                            <a class="px-5 py-3" :href="project_overview.repository_url" type="button" id="repository"
                                v-if="project_overview.repository_url">
                                {{ getContent('repository_button') }}
                            </a>
                            <a class="px-5 py-3" :href="project_overview.website_url" type="button" id="website"
                                v-if="project_overview.website_url">
                                {{ getContent('website_button') }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <div class="vh-100 vw-100 ms-bg-tertiary d-flex justify-content-center align-items-center" v-else>
        <h1 class="ms-text-light">{{ getContent('loading_sentence') }}</h1>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/ProjectOverview' as *;
</style>