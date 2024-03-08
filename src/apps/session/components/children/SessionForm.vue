<template>
    <v-sheet width="300" class="mx-auto">
        <v-form>
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
                    v-model="session.IsDefaultSession"
                >
                </v-switch>
            </v-btn-group>
        </v-form>
    </v-sheet>
</template>

<script setup lang="ts">
import { PropType, onMounted, ref } from 'vue';
import { SessionInterface } from '@/apps/session/models/interface/session.interface'
import { useSessionStore } from '@/apps/session/models/implementation/session.store.model';
import apiClient from '@/api-client';

    const sessionStore = useSessionStore()
    const props = defineProps({
        _session: {
            type: Object as PropType<SessionInterface>,
            default: () => {}
        }
    })
    const session =  ref(props._session)

    const addSession = () => {
        apiClient.sessions.addSession(session.value)
        .then(result => {
            if (result.IsDefaultSession){
                sessionStore.setDefaultSession(result)
            }
        })
    }
</script>