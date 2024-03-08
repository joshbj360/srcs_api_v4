<template>
    <v-data-table 
      :items="subjects"
      :headers="headers"
    >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>
          <v-icon icon="mdi-account-group"></v-icon> &nbsp;
        Subjects
        </v-toolbar-title>
        <v-combobox    
            variant="underlined"
            label="select section"
            v-model="section"
            :items="['Science', 'Arts', 'Junior', 'Others']"
        ></v-combobox>
        <v-spacer></v-spacer>
        <v-divider class="mx-4" inset vertical></v-divider>

        <v-dialog v-model="dialog">
          <template v-slot:activator="{ props }">
            <v-btn class="mb-2" color="primary" dark v-bind="props">New Subject</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">Subject</span>
            </v-card-title>
            <SubjectForm :subject="editedSubject"/>
            <v-card-actions >
              <v-spacer></v-spacer>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="close()"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="save()"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="deleteConfirm">Ok</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions> 
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        size="small"
        class="me-2"
        @click="editSubject(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        size="small"
        @click="deleteSubject(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    </v-data-table>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, reactive } from 'vue';
import { SubjectInterface } from '../../model/interface/subject.interface';
import { useSubjectStore } from '../../model/controller/subject.store';

import SubjectForm from './SubjectForm.vue'
import { nextTick } from 'vue';

const section = ref('');
const subjects = ref<SubjectInterface[]>([]);
const dialog = ref(false);
const dialogDelete = ref(false);
var subjectIndex = -1;

const headers = [
  { title: 'S/N', align: 'start', key: 'id' },
  { title: 'Name', key: 'name' },
  { title: 'Subject Teacher', key: 'subjectTeacher' },
  { title: 'Actions', key: 'actions' },
]
var newSubject = reactive<SubjectInterface>({
  id: 0,
  name: '',
  subjectID: '',
  subjectTeacher: '',
  category: '',
  session: ''
})
var editedSubject = reactive<SubjectInterface>({
  id: 0,
  name: '',
  subjectID: '',
  subjectTeacher: '',
  category: '',
  session: ''
})

const fetchSubjects = async (section: string) => {
  return useSubjectStore().getSubjectsBySection(section)
};

watch(section, async (val) => {
  subjects.value = await fetchSubjects(val);
});

function save() {
  // Implement your save function logic here
  if (subjectIndex > -1) {
    Object.assign(subjects.value[subjectIndex], editedSubject)
  } else {
    subjects.value.push(editedSubject)
  }
}

function close() {
  dialog.value = false;
  nextTick(() => {
    editedSubject = Object.assign({}, newSubject)
    subjectIndex = -1
  })
}

function editSubject(subject: SubjectInterface) {
  // Implement your editSubject function logic here
  subjectIndex = subjects.value.findIndex(
    s => s.subjectID === subject.subjectID
  )
  editedSubject = subject
  dialog.value = true
}

function deleteSubject(subject: SubjectInterface) {
  // Implement your deleteSubject function logic here
  subjectIndex = subjects.value.findIndex(
    s => s.subjectID === subject.subjectID
  )
  editedSubject = subject
  dialogDelete.value = true
}

function closeDelete() {
  dialogDelete.value = false;
  nextTick(() => {
    editedSubject = Object.assign({}, newSubject)
    subjectIndex = -1
  })
}

function deleteConfirm() {
  // Implement your deleteConfirm function logic here
  subjects.value.splice(subjectIndex, 1)
  closeDelete()
}

onMounted(async () => {
  await useSubjectStore().fetchSubjects()
});
</script>