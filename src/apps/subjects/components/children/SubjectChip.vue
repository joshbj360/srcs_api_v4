<script setup lang="ts">
import { useClassStore } from '@/apps/class/models/controller/class.store.model';
import { ClassInterface } from '@/apps/class/models/interface';
import { PropType, computed, ref, Ref, watch, onMounted } from 'vue';
import { useSubjectStore } from '../../model/controller/subject.store';
import { useStudentStore } from '@/apps/student/model/controller/student.store.model';
import { useSchoolStore } from '@/apps/school/models/controllers/school.store.model';
import { useSessionStore } from '@/apps/session/models/implementation/session.store.model';
    const schoolStore = useSchoolStore()
    const sessionStore = useSessionStore()
    const classStore = useClassStore()
    const subjectStore = useSubjectStore()
    const studentStore = useStudentStore()
    // get the class from classID
    const props = defineProps({
        selectedClass: {
            type: Object as PropType<ClassInterface>,
            required: true
        }
    })
    const classID = computed(() => {
        return props.selectedClass.id
    })
    // get all subjects by section
    const subjectsBySection = computed(() => {
        return subjectStore.getSubjectsBySection(props.selectedClass.section)
    })
    // get all subjects already saved for the class
    const subjectsByClass = computed(() => {
        return classStore.subjectsOfferedByClass
    })
    // get the subjectsIds already saved make it serial.
    const subjectIDsByClass = computed(() => {
        const subjects = subjectsByClass.value
        console.log('subject lenght: ', subjects.length)
        const IDs: number[] = []
        for (var i=0; i<subjects.length; i++){
            IDs.push(i)
        }
        return IDs
    })
    const selectedSubjectIds: Ref<number[]> = ref([])
    // get all students in the class
    const students = computed(() => {
        return studentStore.students
    })
    // get the selected subjects

    // save the selected subjects for each student
    // save the selected subjects for the class
    watch(selectedSubjectIds, () => {
        console.log('subject IDs: ', selectedSubjectIds.value)
    })

    onMounted(() => {
        const schoolID = schoolStore.activeSchool.id
        const sessionID = sessionStore.defaultSession.id
        classStore.fetchClasses(schoolID, sessionID)
        classStore.fetchClassSubjects(schoolID, sessionID, classID.value)
        subjectStore.fetchSubjects()
        if (classID.value) {
            studentStore.fetchStudentsByClass(
                schoolID, sessionID, classID.value
            )
        }
        selectedSubjectIds.value = subjectIDsByClass.value
    })

</script>
<template>
    <v-card
        class="mx-auto"
        max-width="400"
    >
        <v-toolbar
            flat
            color="blue-accent-4"
            dark
        >
            <v-btn icon @click="$emit('emitClose')">
                <v-icon>mdi-close</v-icon>
            </v-btn>
        <v-spacer></v-spacer>
        <v-btn>Settings</v-btn>
        </v-toolbar>

        <v-card-text>
            <h2 class="text-h6 mb-2">
                Choose subjects
            </h2>

            <v-chip-group
                column
                multiple
                v-model="selectedSubjectIds"
            >
                <v-chip
                    v-for="(name, id) in subjectsBySection"
                    :key="id"
                    filter
                    variant="outlined"
                >
                    {{ name.name }}
                </v-chip>
            </v-chip-group>
        </v-card-text>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-btn>Save selection</v-btn>
    </v-card>
</template>
