<template>
    <v-form>
        <v-text-field
            label="Name"
            v-model="subject.name"
            variant="outlined"
        ></v-text-field>
        <v-text-field
            label="Name"
            v-model="subject.category"
            variant="outlined"
        ></v-text-field>
        <v-text-field
            label="Name"
            v-model="subject.subjectTeacher"
            variant="outlined"
        ></v-text-field>
    </v-form>
</template>
<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { SubjectInterface } from '../model/interface/subject.interface'

export default defineComponent({
  props: {
      subject: {
        type: Object as PropType<SubjectInterface>,
        default: () => {
          return {}
        }
      }

    }
  })

</script>