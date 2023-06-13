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
        <!-- <img :src="data.image" alt=""> -->
        <div class="card h-100 rounded-0 border-0 shadow">
            <img :src="base_url + 'storage/' + data.image" class="object-fit-cover rounded-0 border-0" height="300" alt="">
            <div class="card-body">
                <div class="card-title fs-4 text-uppercase pb-2">{{ data.title }}</div>

                <div class="d-flex justify-content-center align-items-center gap-2 pb-3">
                    <span class="badge rounded-pill text-bg-dark p-2" v-for="technology in data.technologies">{{
                        technology.name
                    }}</span>
                </div>


                <div>{{ data.description }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>