<!-- eslint-disable vue/no-parsing-error -->
<template>
<v-divider></v-divider>
    <v-data-table 
      v-model:search="search"   
      :items="students"
      :headers="headers"
    >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>
          <v-icon icon="mdi-account-group"></v-icon> &nbsp;
          Class: {{  rClassID }}
        </v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog">
          <template v-slot:activator="{ props }">
            <v-btn class="mb-2" color="primary" dark v-bind="props">New Student</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
            <StudentForm :_student="editedStudent"/>
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
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="save()"
              >
                Save and New
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="closeDelete"
              >Cancel</v-btn>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="deleteStudentConfirm"
              >Ok</v-btn>
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
        @click="editStudent(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        size="small"
        @click="deleteStudent(item)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, nextTick, computed } from 'vue';
import { useStudentStore } from '../../model/controller/student.store.model';
import { StudentInterface } from '../../model/interface/student.interface';

import StudentForm from './StudentForm.vue';
import { useSessionStore } from '@/apps/session/models/implementation/session.store.model';
import { useSchoolStore } from '@/apps/school/models/controllers/school.store.model';

const props = defineProps({
  classID: {
    type: String,
    default: '0'
  }
})

const studentStore = useStudentStore()
const rClassID = ref(props.classID)
const search: string = ''
const formTitle = ref('')
const students = ref<StudentInterface[]>([])
const headers: object[] = [
  {title: 'stdID', align: 'start', key: 'studentID' },
  {title: 'First Name', key: 'first_name' },
  {title: 'Last Name',  key: 'last_name' },
  {title: 'DOB',  key: 'DOB' },
  {title: 'Gender',  key: 'Gender' },
  {title: 'Actions',  key: 'actions', sortable: false },
]

var dialog = ref(false)
var dialogDelete = ref(false)
var studentIndex: number = -1
var editedStudent: StudentInterface = {
  id: 0,
  first_name: '',
  last_name: '',
  other_names: '',
  Gender: '',
  StudentAdmissionStatus: '',
  ClassAdmitted: '',
  studentID: '',
  Address:'',
  SOO: '',
  LGA: '',
  present_class:0,
  password:'',
  date_joined: '2020-01-01',
  sessionID: 0,
  username: '',
  school: 0,
  present_className: ''

}
var newStudent: StudentInterface = {
  id: 0,
  first_name: '',
  last_name: '',
  other_names: '',
  Gender: '',
  StudentAdmissionStatus: '',
  ClassAdmitted: '',
  studentID: '',
  Address:'',
  SOO: '',
  LGA: '',
  present_class:0,
  password:'',
  date_joined: '2020-01-01',
  sessionID: 0,
  username: '',
  school: 0,
  present_className: ''

}

function computeFormTitle(student: StudentInterface): string {
  if (studentIndex === -1 ){
    return 'New Student'
  }
  return  `Edit Student - ${student.last_name}/${student.studentID}`
}

function editStudent(studentItem: StudentInterface) {
  studentIndex = students.value.findIndex(
    s => s.studentID === studentItem.studentID
  )
  editedStudent =  studentItem
  formTitle.value = computeFormTitle(studentItem)
  dialog.value = true
}

function deleteStudent(studentItem: StudentInterface) {
  studentIndex = students.value.findIndex(
    s => s.studentID === studentItem.studentID
  )
  editedStudent = Object.assign({}, studentItem)
  dialogDelete.value = true
}
watch(dialog, (val) => {
  if (!val) {
    close()
  }
})
watch(dialogDelete, (val) => {
  if (!val) {
    closeDelete()
  }
})
function formatDate(selectedDate: string) {
    selectedDate = new Date().toISOString().substr(0, 10)
    return selectedDate ? new Date(selectedDate).toLocaleDateString() : '';
}

async function deleteStudentConfirm() {
  students.value.splice(studentIndex, 1)
  await studentStore.deleteStudent(
    useSchoolStore().activeSchool.id,
    useSessionStore().defaultSession.id,
    editedStudent.id
  )
  closeDelete()
}

function close()  {
  dialog.value = false
  nextTick(() => {
    editedStudent = Object.assign({}, newStudent)
    studentIndex = -1
  })
}

function closeDelete()  {
  dialogDelete.value = false
  nextTick(() => {
    editedStudent = Object.assign({}, newStudent)
    studentIndex = -1
  })
}

function save() {
  addUpdateStudent(
    useSchoolStore().activeSchool.id,
    useSessionStore().defaultSession.id,
    editedStudent
  )
  close()
}


async function addUpdateStudent(schoolID: number, sessionID: number, student: StudentInterface) {
  student.username = `${student.first_name}.${student.last_name}`
  student.password = `${student.username}`
  student.sessionID = sessionID
  student.school = schoolID

  if (studentIndex > -1){
    Object.assign(students.value[studentIndex], student)
    editedStudent = await studentStore.updateStudent(schoolID, sessionID, student)
  } else {
    editedStudent = await studentStore.addStudent(schoolID, sessionID, student)
    students.value.push(editedStudent)
  }
}

async function initStudents() {
    await studentStore.fetchStudentsByClass(
      useSchoolStore().activeSchool.id,
      useSessionStore().defaultSession.id,
      +rClassID.value
    ).then(
      R => students.value = R
    )
}

onMounted(() => {
 initStudents()
})

</script>