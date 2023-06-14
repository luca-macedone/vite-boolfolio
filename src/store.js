import { reactive } from "vue";

import axios from 'axios';

export const store = reactive({
    base_url: 'http://127.0.0.1:8000/',
    projects_api: 'api/projects/',
    projects_list: null,
    project_overview: null,

    getProjects(url) {
        axios
            .get(url)
            .then(result => {
                this.projects_list = result.data.projects.data;
                // console.log(this.projects_list)
            })
            .catch(error => {
                console.error(error);
            })
    },

    getProjectOverview(url) {
        axios
            .get(url)
            .then(result => {
                this.project_overview = result.data.project;
                console.log(this.project_overview);
            })
            .catch(error => {
                console.error(error);
            })
    }
});