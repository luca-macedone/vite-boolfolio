<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'ContactsPage',
    data() {
        return {
            store,
            loading: false,
            success: false,
            name: '',
            email: '',
            message: '',
            errors: {
                haveErrors: false,
                sentences: {},
            },
        }
    },
    methods: {
        sendForm() {
            this.loading = true;
            const data = {
                name: this.name,
                email: this.email,
                message: this.message,
            };

            // console.log(data);

            this.errors = {
                haveErrors: false,
                sentences: {},
            };

            axios
                .post(`${this.store.base_url}api/contacts`, data)
                .then(response => {
                    // console.log(response)

                    this.success = response.data.success;

                    if (!response.success) {
                        this.errors.haveErrors = true;
                        this.errors.sentences = response.data.errors;
                    } else {
                        this.name = '';
                        this.email = '';
                        this.message = '';
                    }
                    this.loading = false;
                    window.scrollTo(0, 0);
                });
        },
        resetFields() {
            this.name = '';
            this.email = '';
            this.message = '';
        }
    },
}
</script>

<template>
    <form @submit.prevent="sendForm()" class="container py-5">
        <div class="row d-flex flex-column align-items-start justify-content-center gap-3">
            <div class="col-12">
                <h1 class="ms-text-light fw-light">Contact Me!</h1>
            </div>
            <div class="col-12" v-if="success">
                <div class="aler ms-alert-success p-4 fs-5 fade show" role="alert">
                    <span class="fw-semibold">Email sended!</span>
                    <span class="ms-2 fw-light">Thank you for contacting me, I will responde you as soon as I can</span>
                </div>
            </div>
            <!-- <div class="col-12" v-if="Object.keys(errors).length > 0              <div class="aler ms-alert-danger p-4 fs-5 fade show" role="alert">
                    <span class="fw-semibold">Error!</span>
                    <ul class="">
                        <li v-for="error in errors">
                            <span class="ms-2 fw-light">{{ error }}</span>
                        </li>
                    </ul>
                </div>
            </div> -->
            <div class="col-12">
                <div class="">
                    <label for="name" class="form-label fs-5 ms-text-light fw-light">Name</label>
                    <input type="text" class="form-control ms-text-dark" name="name" id="name" aria-describedby="nameHelpId"
                        placeholder="Mario" v-model="name">
                    <small id="nameHelpId" class="form-text ms-text-primary fw-light">Please type your name here</small>
                </div>
                <div v-if="errors.haveErrors">
                    <div class="ms-alert-danger p-3 my-3 fw-light" v-for="error in errors.sentences?.name">
                        <span class="fw-bold">Error:</span>
                        {{ error }}
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="">
                    <label for="email" class="form-label fs-5 ms-text-light fw-light">Email</label>
                    <input type="email" class="form-control ms-text-dark" name="email" id="email"
                        aria-describedby="emailHelpId" placeholder="abc@mail.com" v-model="email">
                    <small id="emailHelpId" class="form-text ms-text-primary fw-light">Please type your email here</small>
                </div>
                <div v-if="errors.haveErrors">
                    <div class="ms-alert-danger p-3 my-3 fw-light" v-for="error in errors.sentences?.email">
                        <span class="fw-bold">Error:</span>
                        {{ error }}
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="">
                    <label for="message" class="form-label fs-5 ms-text-light fw-light">Message</label>
                    <textarea class="form-control ms-text-dark " name="message" id="message" rows="5" v-model="message">
                    </textarea>
                    <div v-if="errors.haveErrors">
                        <div class="ms-alert-danger p-3 my-3 fw-light" v-for="error in errors.sentences?.message">
                            <span class="fw-bold">Error:</span>
                            {{ error }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 d-flex justify-content-start align-items-center gap-3 py-4">
                <button type="button" class="btn px-4 py-3" id="reset_form_btn" @click="resetFields()">Reset</button>
                <button type="submit" class="btn px-5 py-3" :class="loading ? 'disabled' : ''" id="send_email_btn">
                    <font-awesome-icon icon="fa-solid fa-spinner" class="laoding-icon"
                        :class="loading ? 'spin' : 'd-none'" />
                    <span :class="loading ? 'd-none' : ''">Send</span>
                </button>
            </div>
        </div>







    </form>
</template>

<style lang="scss" scoped>
@use '../styles/partials/ContactsPage' as *;
</style>