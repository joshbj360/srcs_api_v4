<template>
  <v-app id="inspire">
    <main-bar />
    <!-- <v-navigation-drawer v-model="drawer">
    </v-navigation-drawer> -->

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>{{ defaultSession.year }} {{ defaultSession.term }}</v-app-bar-title>
      <v-btn-group>
        <v-btn @click="goToSettings">Dashboard</v-btn>
        <v-btn @click="goToSettings">Classes</v-btn>
        <v-btn @click="goToSettings">Subjects</v-btn>
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
  import { useSessionStore } from '@/session/models/implementation/session.store.model'
import MainBar from './MainBar.vue'
  import DefaultView from './View.vue'
  import { onMounted, ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  export default {
    components: {
      MainBar,
      DefaultView
    },

    setup() {
      const sessionStore = useSessionStore()
      const defaultSession = sessionStore.defaultSession
      const drawer = ref(false)
      const router = useRouter()

      const goToLogin = () => {
        router.push('/register/login')
      }
      const goToSettings = () => {
        router.push('/settings')
      }

      onMounted(() => {
        sessionStore.fetchDefaultSession()
      })

      return {
        drawer,
        goToLogin,
        goToSettings,
        defaultSession
      }
    }
  }
  
</script>

