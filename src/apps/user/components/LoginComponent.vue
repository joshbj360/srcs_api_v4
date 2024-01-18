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

  <script lang="ts">
import { ref } from 'vue';
import { useUserStore } from '../store';
import apiClient from '@/api-client';
import router from '@/router';

  export default {
   
    setup(props) {
        const username = ref("")
        const password = ref("")

        const userStore = useUserStore()

        const login = async () => {
          try {
            // Login User
            const token = await apiClient.users.loginUser(username.value, password.value)

            // Update the token in the store
            userStore.setToken(token)

            // Update the cookie
            userStore.setCookie('token', JSON.stringify(token), 1)
            if (token) {
              userStore.isAuthenticated = true
              router.push('/')
            }

          } catch(e) {
            console.log('Login failed: ', e)
          }
          
        }
        
        return {
            username,
            password,
            login
        }
    }
  }
</script>
