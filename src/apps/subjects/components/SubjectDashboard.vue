<template>
  <v-sheet width="300" class="mx-auto">
    <c-r-u-d-menu />
    <v-combobox
        label="Subjects"
        v-model="selectedSubjectID"
        :items="subjects.map((e) => {return e.subjectID})"
        @change="selectedSubject(selectedSubjectID)"
        variant="outlined"
      ></v-combobox>
    <Subject :subject="selectedSubject(selectedSubjectID)"/>
  </v-sheet>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import Subject from '../apps/subjects/components/Subject.vue'
    import CRUDMenu from '@/components/shared/CRUDMenu.vue'
    import { useSubjectStore } from '@/apps/subjects/model/controller/subject.store'
    
    const subjects = useSubjectStore().getSubjects
    const selectedSubjectID = ref('')

    const selectedSubject = (selectedSubjectID: string) =>{
        console.log("Selected ", selectedSubjectID)
        const _Subject = useSubjectStore().getSubject(selectedSubjectID)
        console.log(_Subject)
        return _Subject
    }
    onMounted(async () => {
    await useSubjectStore().fetchSubjects()
    })
</script>@/apps/Subject/models/controller/Subject.store