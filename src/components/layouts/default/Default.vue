<template>
  <v-app id="ins">
    <main-bar />
    <v-main>
      <default-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import { useSessionStore } from '@/apps/session/models/implementation/session.store.model'
  import { onMounted } from 'vue'

  import DefaultView from './View.vue'
  import MainBar from './MainBar.vue'

  const sessionStore = useSessionStore()


  onMounted(() => {
    sessionStore.fetchDefaultSession()
  })


</script>

