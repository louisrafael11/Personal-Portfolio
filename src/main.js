import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import '@mdi/font/css/materialdesignicons.css';
import './style.css'; // Import your global CSS file

loadFonts();

createApp(App)
  .use(vuetify)
  .mount('#app');

