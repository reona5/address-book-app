<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>マイアドレス帳</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <SideNav/>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import firebase from 'firebase'
import { mapActions } from 'vuex'
import SideNav from './components/SideNav'

export default {
  name: 'App',
  components: {
    SideNav,
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setLoginUser(user)
      }
    })
  },
  data: () => ({
  }),
  methods: {
    ...mapActions(['toggleSideMenu', 'setLoginUser'])
  }
};
</script>
