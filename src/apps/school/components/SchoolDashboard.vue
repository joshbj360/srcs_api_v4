<template>
    <v-toolbar flat>
        <v-toolbar-title>
            <v-icon icon="mdi-account-group"></v-icon> &nbsp;
            School
        </v-toolbar-title>
        <v-combobox    
            variant="underlined"
            label="select school"
            v-model="schoolId"
            :items="useSchoolStore().getSchoolIDs"
        ></v-combobox>
        
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-btn 
            class="mb-2" 
            color="primary" 
            dark 
            @click="onNewForm()"
        >New School</v-btn>
    </v-toolbar>
    <v-card>
        <SchoolForm 
            :school="school"
            @saveChanges="saveSchoolDetail"
        />
    </v-card>
</template>

<script setup lang="ts">
import { Ref, computed, watch, onMounted, ref } from 'vue';
import { useSchoolStore } from '../models/controllers/school.store.model';
import SchoolForm from '@/apps/school/components/children/SchoolForm.vue'
import { SchoolInterface } from '../models/interface/school.interface';

const schoolId = ref('')
var newSchool1: SchoolInterface = {
    id: 0,
    name: '',
    motto: '',
    schoolID: '',
    sessionID: '',
    facebook: '',
    address: '',
    section: ''
} 
// Assuming school is a Ref
const school: Ref<SchoolInterface | undefined> = ref({
  id: 0,
  name: '',
  motto: '',
  schoolID: '',
  sessionID: '',
  facebook: '',
  address: '',
  section: ''
});

// Using computed to fetch the school based on schoolId
const _school = computed(() => {
  return useSchoolStore().getSchoolFromID(schoolId.value);
});

// Watch for changes in _school and update the school Ref accordingly
watch(_school, (newSchool) => {
  school.value = newSchool;
});

function onNewForm() {
    schoolId.value = ''
    school.value =  newSchool1
}

const saveSchoolDetail = (updatedSchool: SchoolInterface) => {
    if (updatedSchool.id) {
        useSchoolStore().updateSchool(updatedSchool)
    }
}

onMounted(() => {
    useSchoolStore().fetchSchools()
})
</script>