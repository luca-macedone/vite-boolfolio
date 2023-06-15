import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faMagnifyingGlass, faX } from '@fortawesome/free-solid-svg-icons'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

library.add(faMagnifyingGlass, faX)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
