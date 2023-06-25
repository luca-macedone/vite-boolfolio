<script>
import axios from 'axios';
import { store } from '../store';
import en from '../locales/en.json';
import it from '../locales/it.json';

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
            home_en: en.contacts,
            home_it: it.contacts,
            content: null,
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
        },
        setLocalization() {
            if (store.localization_input) {
                // true --> italian
                this.content = this.home_it
            } else {
                // false --> english
                this.content = this.home_en
            }
        },
        getContent(sentence) {
            this.setLocalization();
            switch (sentence) {
                case 'main_title':
                    return this.content.main_title;
                case 'page_description':
                    return this.content.page_description;
                case 'form_name_title':
                    return this.content.form_name_title;
                case 'form_name_description':
                    return this.content.form_name_description;
                case 'form_email_title':
                    return this.content.form_email_title;
                case 'form_email_description':
                    return this.content.form_email_description;
                case 'form_message_title':
                    return this.content.form_message_title;
                case 'form_submit_button':
                    return this.content.form_submit_button;
                case 'message_sended_banner_title':
                    return this.content.message_sended_banner_title;
                case 'message_sended_banner_sentence':
                    return this.content.message_sended_banner_sentence;

            }
        }
    },
}
</script>

<template>
    <form @submit.prevent="sendForm()" class="container py-5">
        <div class="row d-flex flex-column align-items-start justify-content-center gap-3">
            <div class="col-12">
                <h1 class="ms-text-light fw-light">{{ getContent('main_title') }}</h1>
                <p class="ms-text-light fw-lighter">{{ getContent('page_description') }}</p>
            </div>
            <div class="col-12" v-if="success">
                <div class="aler ms-alert-success p-4 fs-5 fade show" role="alert">
                    <span class="fw-semibold">{{ getContent('message_sended_banner_title') }}</span>
                    <span class="ms-2 fw-light">{{ getContent('message_sended_banner_sentence') }}</span>
                </div>
            </div>
            <!-- NAME -->
            <div class="col-12">
                <div class="">
                    <label for="name" class="form-label fs-5 ms-text-light fw-light">{{ getContent('form_name_title')
                    }}</label>
                    <input type="text" class="form-control ms-text-dark" name="name" id="name" aria-describedby="nameHelpId"
                        placeholder="Mario" v-model="name">
                    <small id="nameHelpId" class="form-text ms-text-primary fw-light">{{ getContent('form_name_description')
                    }}</small>
                </div>
                <div v-if="errors.haveErrors">
                    <div class="ms-alert-danger p-3 my-3 fw-light" v-for="error in errors.sentences?.name">
                        <span class="fw-bold">Error:</span>
                        {{ error }}
                    </div>
                </div>
            </div>
            <!-- EMAIL -->
            <div class="col-12">
                <div class="">
                    <label for="email" class="form-label fs-5 ms-text-light fw-light">{{ getContent('form_email_title')
                    }}</label>
                    <input type="email" class="form-control ms-text-dark" name="email" id="email"
                        aria-describedby="emailHelpId" placeholder="mario@example.com" v-model="email">
                    <small id="emailHelpId" class="form-text ms-text-primary fw-light">{{
                        getContent('form_email_description') }}</small>
                </div>
                <div v-if="errors.haveErrors">
                    <div class="ms-alert-danger p-3 my-3 fw-light" v-for="error in errors.sentences?.email">
                        <span class="fw-bold">Error:</span>
                        {{ error }}
                    </div>
                </div>
            </div>
            <!-- MESSAGE -->
            <div class="col-12">
                <div class="">
                    <label for="message" class="form-label fs-5 ms-text-light fw-light">{{ getContent('form_message_title')
                    }}</label>
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
            <!-- FORM BUTTONS -->
            <div class="col-12 d-flex justify-content-start align-items-center gap-3 py-4">
                <button type="button" class="btn px-4 py-3" id="reset_form_btn" @click="resetFields()">Reset</button>
                <button type="submit" class="btn px-5 py-3" :class="loading ? 'disabled' : ''" id="send_email_btn">
                    <font-awesome-icon icon="fa-solid fa-spinner" class="laoding-icon"
                        :class="loading ? 'spin' : 'd-none'" />
                    <span :class="loading ? 'd-none' : ''">{{ getContent('form_submit_button') }}</span>
                </button>
            </div>
        </div>







    </form>
</template>

<style lang="scss" scoped>
@use '../styles/partials/ContactsPage' as *;
</style>