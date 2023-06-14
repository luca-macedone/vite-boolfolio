<script>
export default {
    name: "ProjectCard",
    props: ['data'],
    data() {
        return {
            base_url: 'http://127.0.0.1:8000/',
        }
    },
}
</script>

<template>
    <div class="col-12 col-md-6 col-lg-3">
        <RouterLink :to="{ name: 'project-overview', params: { slug: data.slug } }" class="text-decoration-none">
            <!-- <img :src="data.image" alt=""> -->
            <div class="card h-100 rounded-0 ms-border-secondary ms-bg-light ms-text-dark shadow">
                <img :src="base_url + 'storage/' + data.image" class="project_image rounded-0 border-0" height="300" alt="">
                <div class="card-body d-flex flex-column justify-content-baseline gap-2">
                    <div class="card-title fs-4 text-uppercase">{{ data.title }}</div>

                    <div class="d-flex justify-content-start align-items-center gap-2">
                        <span class="badge rounded-pill ms-bg-primary p-2" v-for="technology in data.technologies">
                            {{ technology.name }}
                        </span>
                    </div>
                    <div>{{ data.description.substring(0, 100) + ' ...' }}</div>
                </div>
            </div>
        </RouterLink>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/ProjectCard' as *;
</style>