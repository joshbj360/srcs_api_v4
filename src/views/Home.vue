<template>
  
  <div class="school-list" >
    <v-combobox 
      v-if="!useSchoolStore().isSchoolSelected"
      v-model:model-value="selectedSchoolName"
      :items="schools.map(s => s.name)"
    ></v-combobox>

  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useUserStore } from '@/apps/user/store';
import { UserInterface } from '@/apps/user/models/user.interface';
import { Ref } from 'vue';
import { SchoolInterface } from '@/apps/school/models/interface/school.interface';
import { useSchoolStore } from '@/apps/school/models/controllers/school.store.model';
import { watch } from 'vue';

  const userStore = useUserStore()
  const users = ref <UserInterface[]>([])
  const schools: Ref<SchoolInterface[]> = ref([])
  const selectedSchoolName = ref('')
  const selectedSchool: Ref<SchoolInterface> = ref({
    id: 1,
    name: 'Example School',
    motto: 'Example Motto',
    address: 'Example Address',
    facebook: 'Example Facebook',
    section: 'Example Section',
    sessionID: 'Example SessionID',
    schoolID: 'Example SchoolID'
  })

  // Load users on component mount
  onMounted(async () => {
    fetchSchools()
  });

  const fetchSchools = async () => {
  await useSchoolStore().fetchSchools()
    .then(
        schoolQuery => schools.value = schoolQuery
  )

  watch(selectedSchoolName, (val) => {
    console.log(val)
    useSchoolStore().setActiveSchool(val)
  })
};

</script>

<style scoped lang="scss">
  .user-list {
    padding: 20px;
    display: flex;
  }
</style>
