<template>
    <v-card width="500" variant="outlined">
      <template v-slot:subtitle>
        <p>Class Name: {{ _class?.name }}</p>
      </template>

      <template v-slot:text>
        <div>
            <p>Section: {{ _class?.section }} </p>
            <p>Category: science </p>
            <p>No. of Male: </p>
            <p>No. of Female: </p>
        </div>
      </template>
      <template v-slot:actions>
        <v-btn @click="goEditClass()">Edit</v-btn>
        <v-btn>Delete</v-btn>
        <v-btn @click="$router.push('/core/student')">Students</v-btn>
        <v-btn>Subjects</v-btn>
        <v-btn>Scores</v-btn>
      </template>
    </v-card>
    <v-divider
      class="mx-3 align-self-center"
      length="500"
      thickness="3"
      horizontal
    ></v-divider>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { ClassInterface } from '../../models/interface';
import router from '@/router';

    const props = defineProps({
        _class: {
            type: Object as PropType<ClassInterface>
        }
    })

    const goEditClass = () => {
      router.push('/class/edit/:id')
    }
</script>