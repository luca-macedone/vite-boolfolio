<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            menuItems: [
                {
                    label: 'Home',
                    routeName: 'home',
                },
                {
                    label: 'Projects',
                    routeName: 'projects',
                },
            ],
        }
    },
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark ms-bg-secondary shadow">
            <div class="container">
                <a class="navbar-brand" href="#">Luca Macedone</a>
                <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li class="nav-item" v-for="item in menuItems">
                            <RouterLink class="nav-link" :to="{ name: item.routeName }">
                                {{ item.label }}
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss">
@use '../styles/partials/AppHeader' as *;
</style>