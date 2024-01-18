<template>
    <div class="layout1">
        <v-sheet width="300" class="mx-auto">
        <Session />
    </v-sheet>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Session from '@/apps/session/components/Session.vue'
    export default defineComponent ({
        components: {
            Session
        },
        setup() {

        }
    })
</script>