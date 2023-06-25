<script>
export default {
    name: 'AppFooter',
}
</script>

<template>
    <footer class="ms-bg-secondary py-5">
        <div class="container">
            <div class="row">
                <!-- <ul class="list-unstyled">
                    <li class="">
                        <a class="nav-link" href="#">some text</a>
                    </li>
                </ul> -->
                <div class="col-12 col-lg-6">
                    <img src="/src/assets/images/svg/brand/logo-full.svg" height="80" alt="Luca Macedone Logo">
                </div>
                <div class="col-12 col-lg-6">
                    <ul class="list-unstyled d-flex justify-content-end align-items-center gap-3 h-100">
                        <!-- LINKEDIN -->
                        <li class="align-self-center">
                            <a href="https://www.linkedin.com/in/luca-macedone/" class="h-100">
                                <font-awesome-icon class="ms-text-primary fa-2x footer-link" title="LinkedIn"
                                    icon="fa-brands fa-linkedin" />
                            </a>
                        </li>
                        <!-- GITHUB -->
                        <li class="align-self-center">
                            <a href="https://github.com/luca-macedone">
                                <font-awesome-icon class="ms-text-primary fa-2x footer-link" title="GitHub"
                                    icon="fa-brands fa-github" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-12 d-flex justify-content-center align-items-center p-2">
                    <h5 class="fw-lighter d-flex align-items-center gap-2 mb-0 ms-text-primary">
                        <font-awesome-icon icon="fa-regular fa-copyright" />
                        Copyright by Luca Macedone, 2023
                    </h5>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>@use '../styles/partials/AppFooter' as *;</style>