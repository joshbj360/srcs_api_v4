<template>
    <v-sheet width="300" class="mx-auto">

      <v-form>
          <v-text-field
              label="Name"
              v-model="subject.name"
              variant="outlined"
          ></v-text-field>
          <v-combobox    
            variant="outlined"
            label="select category"
            v-model="subject.category"
            :items="['Science', 'Arts', 'Junior', 'Others']"
          ></v-combobox>
          <v-text-field
              label="Subject Teacher"
              v-model="subject.subjectTeacher"
              variant="outlined"
          ></v-text-field>
      </v-form>
    </v-sheet>
</template>
<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { SubjectInterface } from '@/apps/subjects/model/interface/subject.interface'

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