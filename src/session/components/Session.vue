<template>
    <v-sheet width="300" class="mx-auto">
        <v-form>
            <v-text-field
              label="Academic Year"
              v-model="session.year"
            ></v-text-field>
            <v-text-field
              label="Academic Term"
              v-model="session.term"
            ></v-text-field>
            <v-btn>Add Session</v-btn>
        </v-form>
    </v-sheet>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const session = ref({
            year: '',
            term: ''
        })

        return {
            session
        }
    }
})
</script>