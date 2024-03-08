<template>
    <v-app id="inspire">
      <v-system-bar>
        <v-spacer></v-spacer>
  
        <v-icon>mdi-square</v-icon>
  
        <v-icon>mdi-circle</v-icon>
  
        <v-icon>mdi-triangle</v-icon>
      </v-system-bar>
    
      <v-navigation-drawer
        v-model="drawer"
        temporary
      >
        <!--  -->
      </v-navigation-drawer>
  
      <v-main class="bg-grey-lighten-2">
        <RouterView />
      </v-main>
    </v-app>
  </template>

<script setup lang="ts">
  import { ref } from 'vue'

  const drawer = ref(null)
</script>