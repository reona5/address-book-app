import Vue from 'vue'
import App from './App.vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBqLSoYUQ6uGPT4pv4THpufT1D2zTd_0Rk",
  authDomain: "address-book-app-88895.firebaseapp.com",
  databaseURL: "https://address-book-app-88895.firebaseio.com",
  projectId: "address-book-app-88895",
  storageBucket: "",
  messagingSenderId: "1073269836092",
  appId: "1:1073269836092:web:bdc00d733e4af877"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
