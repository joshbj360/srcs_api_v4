<template>
    <v-card 
      class="mx-auto"
      color="#26c6da"
      theme="light"
      max-width="400"
      prepend-icon="mdi-twitter"
    >
      <template v-slot:subtitle>
        <p>Class Name: {{ sClass?.name }}
          <span>
            <label @click="goEditClass()">Edit</label>
            <label @click="goEditClass()">Delete</label>
          </span>
        </p>
      </template>

      <template v-slot:text>
        <div>
            <p>Section: {{ sClass?.section }} </p>
            <p>No. of Male: </p>
            <p>No. of Female: </p>
        </div>
      </template>
      <template v-slot:actions>
        <v-btn @click="goToStudentList">Students</v-btn>
        <v-btn @click="showSubjects">Subjects</v-btn>
        <v-btn>Scores</v-btn>
      </template>
    </v-card>
  <v-dialog v-model="dialog">
    <subject-chip 
      :classID="sClass?.id"
      @emitClose="close()"
    />
</v-dialog>
    <v-divider
      class="mx-3 align-self-center"
      length="500"
      thickness="3"
      horizontal
    ></v-divider>
</template>

<script setup lang="ts">
import { PropType, Ref, ref } from 'vue';
import { ClassInterface } from '../../models/interface';
import router from '@/router';
import SubjectChip from '@/apps/subjects/components/children/SubjectChip.vue';
import { useSubjectStore } from '@/apps/subjects/model/controller/subject.store';
import { onMounted } from 'vue';
import { SubjectInterface } from '@/apps/subjects/model/interface/subject.interface';
import { useClassStore } from '../../models/controller/class.store.model';
import { watch } from 'vue';
import { useSessionStore } from '@/apps/session/models/implementation/session.store.model';
import { useSchoolStore } from '@/apps/school/models/controllers/school.store.model';

const props = defineProps({
    _class: {
        type: Object as PropType<ClassInterface>
    },
})
const classStore = useClassStore()

const sClass = ref(props._class)
const dialog = ref(false)
const getSubjectsBySection: Ref<SubjectInterface[]> = ref([])
const subjectsOfferedByClass = ref<SubjectInterface[]>([]);

function showSubjects() {
  if (sClass.value) {
    dialog.value = true
    return
  }
  alert('class is not selected')
}

const offeredSubjects = async (classID: number) => {
  try {
    if (classID) {
        await classStore.fetchClassSubjects(
        useSchoolStore().activeSchool.id,
        useSessionStore().defaultSession.id,
        classID
      ).then(
        Subjects => subjectsOfferedByClass.value = Subjects
      )
      return
    }
  } catch (error) {
    console.error('Error fetching offered subjects:', error);
    return []; // Return an empty array or handle the error as needed
  }
};
const SubjectsBySection = async (section: string | undefined) => {
  const subjects = useSubjectStore().getSubjectsBySection(section)
  return getSubjectsBySection.value = subjects
}
function close() {
  dialog.value = false
}
const goEditClass = () => {
  router.push('/class/edit/:id')
}
const goToStudentList = () => {
  router.push({name: 'listStudent', query: {classID: sClass.value?.id}})
}
watch(sClass, async (val) => {
  if (sClass.value){
    await offeredSubjects(sClass.value?.id)
    await SubjectsBySection(sClass.value?.section)
  }
})

onMounted(async ()  => {
  useSubjectStore().fetchSubjects()
  if (sClass.value){
    await offeredSubjects(sClass.value?.id)
    await SubjectsBySection(sClass.value?.section)
  }
})
</script>../../models/controller/class.store.model