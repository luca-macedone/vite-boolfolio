<template>
    <div class="ms-bg-primary vh-100 vw-100 d-flex flex-column justify-content-center align-items-center gap-5">
        <h1 class="ms-text-light">Error 404 | Not Found</h1>
        <RouterLink class="p-3 text-decoration-none back-btn" :to="{ name: 'projects' }">
            Back to projects
        </RouterLink>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
}
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.back-btn {
    background-color: $ms-secondary;
    color: $ms-light;
    text-decoration: none;
    transition: .25s all ease-in-out;

    &:hover {
        background-color: $ms-tertiary;
        color: $ms-primary;
    }
}
</style>