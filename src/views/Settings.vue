<template>
    <v-card>
      <v-tabs v-model="tab" bg-color="primary">
        <v-tab value="Session">Session</v-tab>
        <v-tab value="School">School</v-tab>
        <v-tab value="Subject">Subject</v-tab>
        <v-tab value="two">Report</v-tab>
        <v-tab value="three">Others</v-tab>
      </v-tabs>
  
      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="Session">
            <SessionDashboard />
          </v-window-item>
  
          <v-window-item value="School">
            <School />
          </v-window-item>
  
          <v-window-item value="Subject">
            <SubjectDashboard />
          </v-window-item>
          <v-window-item value="three">
            Three
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';

  import School from '@/apps/school/components/SchoolDashboard.vue'
  import SessionDashboard from '@/apps/session/components/SessionDashboard.vue'  
  import SubjectDashboard from '@/apps/subjects/components/SubjectDashboard.vue'
  import { useSessionStore } from '@/apps/session/models/implementation/session.store.model';
import { onMounted } from 'vue';
  const tab = ref(null);
  const defaultSession = ref('')

  onMounted(async () => {
    await useSessionStore().fetchDefaultSession().then(
      (result) => {Object.assign(defaultSession, result)}
    )
  })
  </script>
  