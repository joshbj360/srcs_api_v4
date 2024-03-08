<template>
    <v-sheet width="300" class="mx-auto">
      <v-form >
        <v-text-field
          label="Username"
          variant="outlined"
          v-model="username"
        ></v-text-field>
        <v-text-field
          label="Password"
          variant="outlined"
          v-model="password"
        ></v-text-field>
        <v-btn @click="login()">Login</v-btn>
        <v-divider class="mb-4"> </v-divider>
        <p>New User? <router-link to="/register/signup">Please Sign Up</router-link></p>
        </v-form>
    </v-sheet>
  </template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '../store';
import router from '@/router';

const username = ref("")
const password = ref("")
const isAuthenticated = ref(false)

const login = async () => {
  await useUserStore().login(username.value, password.value)
  .then(R => isAuthenticated.value = R)
  if (isAuthenticated.value){
    router.push('/dashboard/')

  }
}

</script>
