<template>
  <div class="class-btn-bar">
    <v-sheet width="500" class="mx-auto">
      <!-- <v-toolbar>
        <v-btn @click=goToAdd() icon="mdi-account-multiple-plus" class="ms-5"></v-btn>
        <v-btn @click="goToList()" icon="mdi-list-box"></v-btn>
        <v-divider
          class="mx-3 align-self-center"
          length="24"
          thickness="2"
          vertical
        ></v-divider>
        <v-btn icon="mdi-printer"></v-btn>
      </v-toolbar> -->
      <v-divider
        class="mx-3 align-self-center"
        length="500"
        thickness="3"
        horizontal
      ></v-divider>
        <RouterView />
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useClassStore } from '@/apps/class/models/controller/class.store';

import ClassCard from '@/apps/class/components/Children/ClassCard.vue';
import ClassForm from '@/apps/class/components/Children/ClassForm.vue';
import router from '@/router';

  const classStore = useClassStore()
  const classes = classStore.classes
  const btnToggleClass = ref(false)

  const goToAdd = () => {
    router.push('/class/add')
  }
  const goToList = () => {
    router.push('/class/list')
  }

  onMounted(async () => {
    console.log('Mounted Class Dashboard')
    await useClassStore().fetchClasses()
    goToList()
  })
</script>@/apps/class/models/controller/class.store