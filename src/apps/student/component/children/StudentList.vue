<template>
    <v-card flat>
      <v-card-title class="d-flex align-center pe-2">
        <v-icon icon="mdi-video-input-component"></v-icon> &nbsp;
        JSS 1 Bethel
  
        <v-spacer></v-spacer>
  
        <v-text-field
          v-model="search"
          prepend-inner-icon="mdi-magnify"
          density="compact"
          label="Search student"
          single-line
          flat
          hide-details
          variant="solo-filled"
        ></v-text-field>
      </v-card-title>
  
      <v-divider></v-divider>
      <v-data-table v-model:search="search" :items="students">
        
      </v-data-table>
    </v-card>
  </template>
  <script setup lang="ts">
import { onMounted } from 'vue';
import { useStudentStore } from '../../model/controller/student.store.model';
import { StudentInterface } from '../../model/interface/student.interface';
   const search = ''
   const students: StudentInterface[] =  useStudentStore().students

   onMounted(() => {
    useStudentStore().fetchStudents()
    console.log(students)
   })
</script>