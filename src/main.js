import { createApp } from 'vue'
import App from './App.vue'
import The404 from './components/pages/The404.vue'
import MainPage from './components/pages/MainPage.vue'
import AboutPage from './components/pages/AboutPage.vue'
import TheNavigation from './components/UI/TheNavigation.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/main'},
        {path: '/main', component: MainPage},
        {path: '/about', component: AboutPage},
        {path: '/:notFound(.*)', component: The404},
    ]
})

const app = createApp(App);
app.component('the-navigation', TheNavigation)
app.use(router)
app.mount('#app')
