import axios from 'axios'
// Create Vuex Store and register database through Vuex ORM.
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'
import User from '@/models/User'

const BASE_URL = process.env.API_URL // Dev

axios.defaults.baseURL = BASE_URL

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = store.state.token;
    config.headers.Authorization = 'Bearer ' + token;

    if (config.data instanceof FormData) {
        Object.assign(config.headers, config.data.getHeaders());
    }

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

VuexORM.use(VuexORMAxios, {
    axios,
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    baseURL: BASE_URL
})

// Create a new instance of Database.
const database = new VuexORM.Database()

// Register Models to Database.
database.register(User)

const store = new Vuex.Store({
    state () {
        return {
            user: null,
            token: null,
            lang: null
        }
    },

    getters: {
        getToken: state => state.token// if we takes state by getters , PROBABLY we need watcher and mapState, not checked
    },

    mutations: {

        setToken: (state, token) => state.token = token,

        setUser: (state, user) => state.user = user,

        setLang: (state, lang) => state.lang = lang
    },

    actions: {

        setToken: (context, token) => context.commit('setToken', token),

        setLang: (context, lang) => context.commit('setLang', lang),

        setUser: (context, user) => context.commit('setUser', user),
    },

    plugins: [VuexORM.install(database)]
})

export default store

const token = localStorage.getItem('token')
if (token) {
    console.log('[store] Setting token from localStorage')
    store.commit('setToken', token)
} else {
    console.log('[store] Token not found in localStorage')
}

store.commit('setLang', localStorage.getItem('lang'))
