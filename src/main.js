import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import store from './store'
import Toast from 'vue-toastification'

// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faKey, faBars, faPowerOff, faInfoCircle, faTrain
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/scss/style.scss'

library.add(faKey)
library.add(faBars)
library.add(faPowerOff)
library.add(faInfoCircle)
library.add(faTrain)

const toastOptions = {
    position: 'top-center',
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: false,
    showCloseButtonOnHover: true,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: false,
    transition: 'Vue-Toastification__bounce',
    maxToasts: 20,
    newestOnTop: true,
    //prevent appearing same notification
    filterBeforeCreate: (toast, toasts) => {
        if (toasts.filter(t => t.type === toast.type).length !== 0) return false
        return toast
    }
}

createApp(App)
    .use(i18n)
    .use(router)

    .use(store)
    .use(Toast, toastOptions)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
