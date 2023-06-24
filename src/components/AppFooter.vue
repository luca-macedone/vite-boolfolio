<script>
export default {
    name: 'AppFooter',
}
</script>

<template>
    <footer class="ms-bg-secondary py-5 ms-text-light">
        <div class="container">
            <div class="row">
                <!-- <ul class="list-unstyled">
                    <li class="">
                        <a class="nav-link" href="#">some text</a>
                    </li>
                </ul> -->
                <div class="col-12 col-lg-6">

                </div>
                <div class="col-12 col-lg-6">

                </div>
                <div class="col-12">
                    <h5 class="d-flex justify-content-center align-items-center gap-2 fw-lighter">
                        <font-awesome-icon icon="fa-regular fa-copyright" />
                        Copyright by Luca Macedone, 2023
                    </h5>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../styles/partials/AppFooter' as *;
</style>