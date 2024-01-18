<template>
    <v-form>
        <v-text-field
            label="Name"
            v-model="student.YearAdmitted"
            variant="outlined"
        ></v-text-field>
        <v-text-field
            label="Name"
            v-model="student.ClassAdmitted"
            variant="outlined"
        ></v-text-field>
        <v-text-field
            label="Name"
            v-model="student.YearAdmitted"
            variant="outlined"
        ></v-text-field>
        <v-text-field
            label="Name"
            v-model="student.name"
            variant="outlined"
        ></v-text-field>
        <v-text-field
            label="Name"
            v-model="student.studentID"
            variant="outlined"
        ></v-text-field>
    </v-form>
</template>
<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { StudentInterface } from '../model/interface/student.interface'

    export default defineComponent({
        props: {
            student: {
                type: Object as PropType<StudentInterface>,
                default: () => {
                    return {}
                }
            }
        }
    })
</script>

