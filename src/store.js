import { reactive } from "vue";



export const store = reactive({
    base_url: 'http://127.0.0.1:8000/',
    projects_api: 'api/projects/',
    latest_projects_api: 'api/latest_projects',
    project_placeholders: 6,
    images_folder: '/src/assets/images/',
});