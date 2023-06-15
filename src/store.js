import { reactive } from "vue";



export const store = reactive({
    base_url: 'http://127.0.0.1:8000/',
    projects_api: 'api/projects/',
    project_placeholders: 6,
});