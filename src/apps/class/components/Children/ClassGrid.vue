<template>
    <v-sheet width="500" class="mx-auto">
        <v-data-table  :items="classes"></v-data-table>
    </v-sheet>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { ClassInterface } from '../../models/interface';

    const props = defineProps({
        classes: {
            type: Array as PropType<ClassInterface[]>
        }
    })
</script>
