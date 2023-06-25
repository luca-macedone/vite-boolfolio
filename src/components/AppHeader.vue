<script>
import { store } from '../store';
export default {
    name: 'AppHeader',
    data() {
        return {
            store,
            menuItems_en: [
                {
                    label: 'Home',
                    routeName: 'home',
                },
                {
                    label: 'Projects',
                    routeName: 'projects',
                },
                {
                    label: 'Contacts',
                    routeName: 'contacts',
                },
            ],
            menuItems_it: [
                {
                    label: 'Home',
                    routeName: 'home',
                },
                {
                    label: 'Progetti',
                    routeName: 'projects',
                },
                {
                    label: 'Contatti',
                    routeName: 'contacts',
                },
            ],
            menuItems: null,
        }
    },
    methods: {
        setLocalization() {
            if (store.localization_input) {
                // true --> italian
                this.menuItems = this.menuItems_it
            } else {
                // false --> english
                this.menuItems = this.menuItems_en
            }
        },
    },
    mounted() {
        this.setLocalization();
    }
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark ms-bg-secondary shadow py-2 py-lg-0">
            <div class="container">
                <div class="navbar-brand py-0 d-flex align-items-center">
                    <img src="/src/assets/images/svg/brand/logo-full.svg" class="" alt="Luca Macedone's Logo">
                </div>
                <button class="navbar-toggler d-lg-none border-0" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li class="nav-item py-3 py-lg-0" v-for="item in menuItems">
                            <RouterLink class="nav-link ms-text-light py-3 px-4" :to="{ name: item.routeName }">
                                {{ item.label }}
                            </RouterLink>
                        </li>
                        <li class="nav-item py-3 py-lg-0 d-flex align-items-center ms-4">

                            <div class="flags-wrapper cursor-pointer"
                                @click="store.localization_input = !store.localization_input; setLocalization()">
                                <img class="flag-selector-left" height="30" width="38"
                                    :class="store.localization_input ? 'active-flag' : 'disabled'"
                                    :src="`/src/assets/images/${store.svg_folder}/italy-icon.svg`" alt="Italian">
                                <span class="flags-divider"></span>
                                <img class="flag-selector-right" height="30" width="38"
                                    :class="store.localization_input ? 'disabled' : 'active-flag'"
                                    :src="`/src/assets/images/${store.svg_folder}/united-kingdom-icon.svg`" alt="English">
                            </div>

                            <!-- <img :src="`/src/assets/images/${store.svg_folder}/${store.localization_input ? 'italy-icon.svg' : 'united-kingdom-icon.svg'}`"
                                height="30" width="35" class="rounded mt-1"
                                :title="store.localization_input ? 'Italiano' : 'English'"
                                :alt="store.localization_input ? 'Italiano' : 'English'"
                                @click="store.localization_input = !store.localization_input; setLocalization()"> -->

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