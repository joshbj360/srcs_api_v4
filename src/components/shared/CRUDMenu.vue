<template>
    <v-toolbar width="300" class="mx-auto">
    <template v-slot:prepend>
      <v-btn icon="mdi-arrow-left"></v-btn>
    </template>

    <v-btn icon="mdi-archive-plus-outline" class="ms-5"></v-btn>

    <v-btn icon="mdi-alert-circle-outline"></v-btn>

    <v-btn icon="mdi-delete-outline"></v-btn>

    <template v-if="$vuetify.display.smAndUp">
      <v-divider
        class="mx-3 align-self-center"
        length="24"
        thickness="2"
        vertical
      ></v-divider>

      <v-btn icon="mdi-folder-outline"></v-btn>

      <v-btn icon="mdi-tag-outline"></v-btn>

      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-toolbar>
    
</template>

<script setup lang="ts">
</script>