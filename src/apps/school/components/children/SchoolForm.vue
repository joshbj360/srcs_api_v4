<template>
    <v-card>
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
                <v-col cols="12" sm="6" md="4">
                    <v-text-field
                        label="School ID"
                        v-model="school.schoolID"
                        variant="outlined"
                    ></v-text-field>
                    <v-combobox
                        label="Section"
                        v-model="school.section"
                        variant="outlined"
                        :items="['College', 'Primary', 'Nursery']"
                    ></v-combobox>
                    <v-text-field
                        label="School Name"
                        v-model="school.name"
                        variant="outlined"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-text-field
                        label="Motto"
                        v-model="school.motto"
                        variant="outlined"
                    ></v-text-field>
                    <v-text-field
                        label="Facebook Handle"
                        v-model="school.facebook"
                        variant="outlined"
                    ></v-text-field>
                    <v-text-field
                        label="Twitter Handle"
                        v-model="school.twitter"
                        variant="outlined"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <v-text-field
                        label="Logo URL"
                        variant="outlined"
                    ></v-text-field>
                    <v-textarea
                        label="School Address"
                        v-model="school.address"
                        variant="outlined"
                    ></v-textarea>
                </v-col>
            </v-row>
        </v-form>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="blue-darken-1"
                variant="text"
                @click="saveChanges"
            >
            Save
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import { defineProps, ref, PropType } from 'vue';
import { SchoolInterface } from '../models/interface/school.interface';

const props = defineProps({
  school: {
    type: Object as PropType<SchoolInterface>,
    default: () => ({}),
  },
});

const valid = ref(true);
const emit = defineEmits(['saveChanges'])

const saveChanges = () => {
  // Additional validation logic if needed
  if (valid.value) {
    // Emit the event to save changes
    emit('saveChanges', props.school);
  }
};
</script>
