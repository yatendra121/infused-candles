import { createApp } from 'vue'
import './style.css'
import './bootstrap.min.css'
import './templatemo.css'
import './custom.css'
import './fontawesome.min.css'
import App from './App.vue'
import router from './components/router';

const app = createApp(App);
app.use(router);
app.mount('#app');
