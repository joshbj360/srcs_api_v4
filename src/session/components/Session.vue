<template>
    <v-sheet width="300" class="mx-auto">
        <v-form>
            <div class="header">
                <h2>Session Settings</h2>
                <v-btn icon="mdi-plus"></v-btn>
            </div>

            <v-combobox
            label="Sessions"
            :items="sessionsID"
            variant="outlined"
            ></v-combobox>
            <v-text-field
              label="Academic Year"
              variant="outlined"
              v-model="session.year"
            ></v-text-field>
            <v-text-field
              label="Academic Term"
              variant="outlined"
              v-model="session.term"
            ></v-text-field>
            <v-btn-group>
                <v-btn @click="addSession" >Save</v-btn>
                <v-switch 
                label="Default Session?"
                v-model="session.defaultSession"></v-switch>
            </v-btn-group>
        </v-form>
    </v-sheet>
</template>

<script setup lang="ts">
import apiLiveClient from '@/api-client/live';
import { reactive, onMounted } from 'vue';
import { SessionInterface } from '../models/interface/session.interface';
import { useSessionStore } from '../models/implementation/session.store.model';

const sessionStore = useSessionStore()
const session: SessionInterface = reactive<SessionInterface>({
    year: '',
    term: '',
    defaultSession: false
})

const sessionsID = reactive<string[]>([])

const sessions = () => {
    try {
        sessionStore.fetchSessions()
        .then(result => {
            result.forEach((s) => {
                sessionsID.push(s.year)
            })
        })
    } catch (error) {
        console.error('Error fetching sessions', error);
        // Handle the error, show a message, etc.
        }
};

const addSession = () => {
    apiLiveClient.sessions.addSession(session)
    .then(result => {
        if (result.defaultSession){
            sessionStore.setDefaultSession(result)
        }
    })
}

onMounted(() => {
    sessions
})
</script>