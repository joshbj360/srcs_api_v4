<template>
    <div>
        <ClassCard v-for="_class in classes"
            :key="_class.classID"
            :_class="_class"
        />
    </div>
    
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';
import { useClassStore } from '../models/controller/class.store';
import ClassCard from './Children/ClassCard.vue';

    const classes = useClassStore().getClasses

    onMounted(() => {
        useClassStore().fetchClasses()
    })
</script>