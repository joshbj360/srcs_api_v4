<template>
  <!-- <v-app-bar flat>
    <v-app-bar-title @click="$router.push('/')">
      <v-icon icon="mdi-circle-slice-6" />
      Zion International School
    </v-app-bar-title>
  </v-app-bar> -->

  <v-app-bar>
    <v-app-bar-title v-if="!isSchoolSelected && !isAuthenticated" @click="$router.push('/')">
      <v-icon icon="mdi-circle-slice-6" />
      School Result Compilation Software
    </v-app-bar-title>
    <v-app-bar-title  v-else  >
      <v-icon icon="mdi-circle-slice-6" />
      {{ useSchoolStore().activeSchool.name }}  --- {{ defaultSession.sessionID }}
  </v-app-bar-title>

    <v-btn-group v-if="isAuthenticated">
      <v-text-field
        class="custom-text-field"
        dense
        flat
        hide-details
        label="Search"
        rounded="lg"
        single-line
        variant="solo-filled"
      ></v-text-field>

      <v-btn @click="goToClassDashboard">Dashboard</v-btn>
      <v-btn @click="goToSettings">Settings</v-btn>
      <v-btn @click="logout">Logout</v-btn>
    </v-btn-group>

    <v-btn v-if="!isAuthenticated && isSchoolSelected" @click="goToLogin">Sign In</v-btn>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useSchoolStore } from '@/apps/school/models/controllers/school.store.model';
import { useSessionStore } from '@/apps/session/models/implementation/session.store.model';
import { SessionInterface } from '@/apps/session/models/interface/session.interface';
import { useUserStore } from '@/apps/user/store';
import { ref, Ref, watch } from 'vue';
import { useRouter } from 'vue-router';

  const defaultSession: Ref<SessionInterface> = ref({
    id: 0,
    year: '',
    term: '',
    IsDefaultSession: false,
    sessionID: ''
  })
  const isAuthenticated = ref(false)
  const isSchoolSelected = ref(false)
  const drawer = ref(false)
  const router = useRouter()

  const goToLogin = () => {
    router.push('/register/login')
  }
  const goToSettings = () => {
    router.push('/core/settings')
  }
  const goToClassDashboard = () => {
    router.push('/dashboard/')
  }
  const logout = () => {
    if (!useUserStore().logOut()) {
      router.push('/register/login')
    }
  }

  watch(() => useUserStore().isAuthenticated, (val: boolean) => {
    isAuthenticated.value = val;
    if (isAuthenticated.value) {
      useSchoolStore().fetchSchools
      useSessionStore().fetchDefaultSession()
      .then(R => defaultSession.value = R)
  }
});


watch(() => useSchoolStore().isSchoolSelected, (val: boolean) => {
    isSchoolSelected.value = val
  })
</script>
<style scoped>
.custom-text-field {
  max-width: 160px;
  min-width: 120px;
}
</style>
