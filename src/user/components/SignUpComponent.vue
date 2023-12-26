<template>
  <v-sheet width="300" class="mx-auto">
    <v-form>
      <v-text-field 
      label="username"
      variant="outlined"
      v-model="user.username"
      ></v-text-field>
      <v-text-field 
      label="Full Name"
      variant="outlined"
      v-model="fullName"
      ></v-text-field>
      <v-text-field 
      label="Password"
      variant="outlined"
      v-model="user.password"
      ></v-text-field>
      <v-text-field 
      label="Re-enter password"
      v-model="password1"
      ></v-text-field>
    </v-form>
    <v-btn @click="signup">Sign up</v-btn>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { UserInterface } from '../models/user.interface';
import apiClient from '@/api-client';

export default defineComponent({

  setup() {
    const fullName = ref("")
    const password1 = ref("")
    const user = ref({
      username: '',
      password: '',
      first_name: '',
      last_name: ''
    })

    const signup = async () => {
      [user.value.first_name, user.value.last_name] = fullName.value.split(" ")
      await apiClient.users.addUser(
        user.value.username,
        user.value.password,
        user.value.first_name,
        user.value.last_name
      )
    }

    return {
      password1,
      fullName,
      user,
      signup
    }
  }
})
</script>

