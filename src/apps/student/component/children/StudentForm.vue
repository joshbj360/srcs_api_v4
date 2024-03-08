<template>
    <v-container>
        <v-form>
            <v-row>
                <v-col cols="12" sm="6" md="4">
                    <v-combobox
                        label="Student Class"
                        :items="classes"
                        v-model="className"
                        variant="outlined"
                    ></v-combobox>
                    <v-combobox
                        label="Status"
                        :items="['Active','Transferred','Graduated','Expelled','AWOL']"
                        v-model="student.StudentAdmissionStatus"
                        variant="outlined"
                    ></v-combobox>
                    <v-combobox
                        label="Gender"
                        :items="['Male','Female']"
                        v-model="student.Gender"
                        variant="outlined"
                    ></v-combobox>

                    <!-- <v-text-field
                        label="Year Admitted"
                        v-model="student.YearAdmitted"
                        append-icon="mdi-calendar"
                        variant="outlined"
                    ></v-text-field>
                    <v-text-field
                        v-model="student.DOB"
                        label="Date of birth"
                        append-icon="mdi-calendar"
                        variant="outlined"
                    ></v-text-field> -->

                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-text-field
                        label="First Name (name parents gave you)"
                        v-model="student.first_name"
                        variant="outlined"
                    ></v-text-field>
                    <v-text-field
                        label="Surname"
                        v-model="student.last_name"
                        variant="outlined"
                    ></v-text-field>
                    <v-text-field
                        label="Other Names"
                        v-model="student.other_names"
                        variant="outlined"
                    ></v-text-field>
                    <v-text-field
                        label="State of Origin"
                        v-model="student.SOO"
                        variant="outlined"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-text-field
                        label="LGA"
                        v-model="student.LGA"
                        variant="outlined"
                    ></v-text-field>
                    <v-textarea
                        label="Address"
                        v-model="student.Address"
                        variant="outlined"
                    ></v-textarea>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>
<script setup lang="ts">
import { PropType, ref, Ref, watch } from 'vue';
import { StudentInterface } from '@/apps/student/model/interface/student.interface'
import { onMounted } from 'vue';
import { useClassStore } from '@/apps/class/models/controller/class.store.model';

const props = defineProps( {
    _student: {
        type: Object as PropType<StudentInterface>,
        default: () => {
            return {
                first_name: '',
                last_name: '',
                other_names: '',
                Gender: '',
                DOB: new Date('2020/01/01'),
                StudentAdmissionStatus: '',
                YearAdmitted: new Date('2020/01/01'),
                ClassAdmitted: '',
                studentID: '',
                Address:'',
                SOO: '',
                LGA: 'ABIA',
                Passport: '',
                present_class:0,
                PhoneNumber: 8000000000,
                password:'',
                date_joined: new Date('2020/01/01'),
                sessionID: 0,
                username: ''
            }
        }
    }
})

const className = ref('')
const student = ref(props._student)
const classes: Ref<string[]> = ref([])


watch(className, (val) => {
    const id = useClassStore().classes.find(c => c.name === val)?.id
    if (id) {
        student.value.present_class = id
    }
})

onMounted(() => {
    classes.value = useClassStore().classes.map(c => c.name)
})
</script>

<style scoped lang="scss">
    .btn-col {
        justify-content: flex-end;
    }
</style>

