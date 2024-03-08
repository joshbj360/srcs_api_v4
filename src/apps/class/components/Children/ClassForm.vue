<template>
    <v-sheet width="500"  class="mx-auto">
      <v-form @submit.prevent>
        <v-text-field
          v-model="stdClass.name"
          label="Class Name"
          variant="outlined"
        ></v-text-field>
        <v-text-field
          v-model="stdClass.section"
          label="Section"
          variant="outlined"
        ></v-text-field>
        <v-text-field
          v-model="stdClass.formTeacher"
          label="Form Teacher"
          variant="outlined"
        ></v-text-field>
        <v-btn type="submit" @click="addNewClass()">Save</v-btn>
      </v-form>
    </v-sheet>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { ClassInterface } from '../../models/interface';
import { useClassStore } from '../../models/controller/class.store.model';

const classStore = useClassStore()

  const props = defineProps({
      model: {
          type: Object as PropType<ClassInterface>,
              default: () => {
                  return {
                    name: ''
                  }
              }
      }
  })

  const  stdClass: ClassInterface = props.model

  async function addNewClass() {
  await classStore.addClass(stdClass)
  }
</script>../../models/controller/class.store.model