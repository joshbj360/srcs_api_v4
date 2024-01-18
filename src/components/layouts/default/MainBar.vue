<template>
    <v-app-bar flat>
      <v-app-bar-title
      @click="$router.push('/')"
      >
        <v-icon icon="mdi-circle-slice-6" />
        Zion International School
      </v-app-bar-title>
    </v-app-bar>
    
    <!-- <v-navigation-drawer v-model="drawer">
    </v-navigation-drawer> -->
    <v-app-bar>
        <v-container class="mx-auto d-flex align-center justify-center">
          
          <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->
          <v-app-bar-title>{{ defaultSession.year }} {{ defaultSession.term }}</v-app-bar-title>
          <v-btn-group v-if="useUserStore().isAuthenticated">
            <v-responsive max-width="160" min-width="120">
              <v-text-field
                density="compact"
                flat
                hide-details
                label="Search"
                rounded="lg"
                single-line
                variant="solo-filled"
              ></v-text-field>
            </v-responsive>
            <v-spacer></v-spacer>
         
            <v-btn @click="goToClassDashboard">Dashboard</v-btn>
            <v-btn @click="goToSettings">Settings</v-btn>
            <v-btn @click="logout">Logout</v-btn>
          </v-btn-group>

          <v-btn v-if="!useUserStore().isAuthenticated" @click="goToLogin">Sign In</v-btn>
        </v-container>
      </v-app-bar>
</template>

<script lang="ts" setup>
  import { useSessionStore } from '@/apps/session/models/implementation/session.store.model';
  import { useUserStore } from '@/apps/user/store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

  const defaultSession = useSessionStore().defaultSession
  const drawer = ref(false)
  const router = useRouter()

  const goToLogin = () => {
    router.push('/register/login')
  }
  const goToSettings = () => {
    router.push('/settings')
  }
  const goToClassDashboard = () => {
    router.push('/class')
  }
  const logout = () => {
    if (!useUserStore().logOut()) {
      router.push('/register/login')
    }
  }
</script>
