<script>
import { store } from '../store';
export default {
    name: 'ProjectOverview',
    data() {
        return {
            store,
            single_project_url: store.base_url + store.projects_api + this.$route.params.slug,
            // image_url: store.base_url + 'storage/' + store.project_overview.image,
        }
    },
    mounted() {
        this.store.getProjectOverview(this.single_project_url);
    }
}
</script>

<template>
    <div>
        <!-- {{ store.project_overview.title }} -->
        <div class="p-5 mb-4 bg-transparent rounded-0 ms-text-light">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold text-shadow">{{ store.project_overview }}</h1>
                <!-- <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in
                    previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to
                    your liking.</p> -->
                <!-- <button class="btn btn-primary btn-lg" type="button">Example button</button> -->
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>