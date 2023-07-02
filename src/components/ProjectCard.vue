<script>
import { store } from '../store'
export default {
    name: "ProjectCard",
    props: ['data'],
    data() {
        return {
            store,
            base_url: 'http://127.0.0.1:8000/',
            description: false,
        }
    },
    methods: {
        showDescription() {
            if (store.localization_input) {
                // true --> italian
                return this.data.description_it
            } else {
                // false --> english
                return this.data.description_en
            }
        },
    },
}
</script>

<template>
    <div class="col-12 col-md-6 col-lg-4">
        <RouterLink :to="{ name: 'project-overview', params: { slug: data.slug } }" class="text-decoration-none">
            <!-- <img :src="data.image" alt=""> -->
            <div class="card rounded h-100 border-0 ms-bg-light ms-text-dark shadow"
                @mouseenter="description = !description" @mouseleave="description = !description">
                <img :src="base_url + 'storage/' + data.image" class="project_image border-0 rounded" loading="lazy"
                    height="300" alt="">
                <div class="card-body rounded card-img-overlay">
                    <div class="h-100 d-flex flex-column justify-content-between align-items-start">
                        <div class="card-title fs-4 text-uppercase">
                            <div class="title">
                                {{ data.title }}
                            </div>
                        </div>
                        <div class="d-flex flex-column align-items-start gap-3">
                            <div class="d-flex justify-content-start align-items-center gap-2 flex-wrap">
                                <span class="badge rounded-pill ms-bg-secondary ms-text-light px-3 py-2 p-2"
                                    v-for="technology in data.technologies">
                                    {{ technology.name }}
                                </span>
                            </div>
                            <div class="ms-text-light description" :class="description ? '' : 'd-none'">{{
                                showDescription().substring(0,
                                    100) + ' ...' }}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </RouterLink>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/ProjectCard' as *;
</style>