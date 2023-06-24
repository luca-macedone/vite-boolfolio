<script>
import ProjectCard from './components/ProjectCard.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    components: {
        AppHeader,
        AppFooter,
    },
}
</script>

<template>
    <AppHeader />

    <main class="ms-body">
        <router-view />
    </main>

    <AppFooter />
</template>

<style lang="scss">
@use './styles/partials/common.scss' as *;
</style>
