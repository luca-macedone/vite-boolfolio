import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faMagnifyingGlass, faX, faChevronRight, faChevronLeft, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

library.add(faMagnifyingGlass, faX, faChevronLeft, faChevronRight, faSpinner, faCopyright)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
