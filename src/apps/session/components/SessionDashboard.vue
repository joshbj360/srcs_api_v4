<template>
      <v-data-table 
      :items="sessions"
      :headers="headers"
    >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>
          <v-icon icon="mdi-account-group"></v-icon> &nbsp;
        Session
        </v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog">
          <template v-slot:activator="{ props }">
            <v-btn class="mb-2" color="primary" dark v-bind="props">New Session</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
            <SessionForm :_session="editedSession"/>
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
        @click="editSession(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        size="small"
        @click="deleteSession(item)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import SessionForm from './children/SessionForm.vue';

import { useSessionStore } from '../models/implementation/session.store.model';
import { reactive, ref, nextTick } from 'vue';
import { SessionInterface } from '../models/interface/session.interface';
import { onMounted } from 'vue';

const formTitle = "Session Settings"
const dialog = ref(false)
var dialogDelete = ref(false)

var sessionIndex = -1
var editedSession = reactive<SessionInterface>({
  id:0,
  year: '',
  term: '',
  IsDefaultSession: false,
  sessionID: '',
})
var newSession = reactive<SessionInterface>({
  id:0,
  year: '',
  term: '',
  IsDefaultSession: false,
  sessionID: '',
})

const headers: Object[] = [
    {title: 'SessionID', align: 'start', key: 'sessionID'},
    {title: 'Year', key: 'year'},
    {title: 'Term', key: 'term'},
    {title: 'Active Term?', key: 'IsDefaultSession'},
    {title: 'Actions', key: 'actions', sortable: false},
]

const sessions = ref<SessionInterface[]>([])

function close() {
    dialog.value =false
    nextTick(() => {
        editedSession = Object.assign({}, newSession)
        sessionIndex = -1
    })
}
function closeDelete()  {
  dialogDelete.value = false
  nextTick(() => {
    editedSession = Object.assign({}, newSession)
    sessionIndex = -1
  })
}
function save() {
    if (sessionIndex > -1) {
        Object.assign(sessions.value[sessionIndex], editedSession)
    } else {
        sessions.value.push(editedSession)
    }
}

function editSession(sessionItem: SessionInterface) {
    sessionIndex = sessions.value.findIndex(s => s.sessionID === sessionItem.sessionID)
    editedSession = sessionItem
    dialog.value = true
}

function deleteSession(sessionItem: SessionInterface){
    sessionIndex = sessions.value.findIndex(s => s.sessionID === sessionItem.sessionID)
    editedSession = sessionItem
    dialogDelete.value = true
}

function deleteConfirm() {
  sessions.value.splice(sessionIndex, 1)
  //TODO - DeleteSession: remove the student from the DB
  closeDelete()
}
onMounted(() => {
    useSessionStore().fetchSessions()
    .then(R => sessions.value = R)
})
</script>