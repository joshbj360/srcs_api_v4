<template>
  <v-app id="inspire">
    <main-bar />
    <v-navigation-drawer v-model="drawer">
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Session: 2023/2024   Term: First Term</v-app-bar-title>
      <v-btn-group>
        <v-btn @click="goToSettings">Settings</v-btn>
        <v-btn @click="goToLogin">Sign In</v-btn>
      </v-btn-group>
    </v-app-bar>

    <v-main>
      <default-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
  import MainBar from './MainBar.vue'
  import DefaultView from './View.vue'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  export default {
    components: {
      MainBar,
      DefaultView
    },

    setup() {
      const drawer = ref(false)
      const router = useRouter()

      const goToLogin = () => {
        router.push('/register/login')
      }
      const goToSettings = () => {
        router.push('/settings')
      }

      return {
        drawer,
        goToLogin,
        goToSettings
      }
    }
  }
  
</script>

