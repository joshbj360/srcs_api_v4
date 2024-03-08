<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="_class in classes" :key="_class.classID">
        <ClassCard :_class="_class" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue';
import ClassCard from '@/apps/class/components/Children/ClassCard.vue'
import { useClassStore } from '@/apps/class/models/controller/class.store.model';
import { useSessionStore } from '@/apps/session/models/implementation/session.store.model';
import { SessionInterface } from '@/apps/session/models/interface/session.interface';
import { ClassInterface } from '@/apps/class/models/interface';
import { useSchoolStore } from '@/apps/school/models/controllers/school.store.model';

const schoolStore = useSchoolStore()
const sessionStore = useSessionStore()
const session: Ref<SessionInterface> = ref(sessionStore.defaultSession)

const classes: Ref<ClassInterface[]> = ref([])

onMounted(async () => {
  await useSessionStore().fetchDefaultSession()
  await useClassStore().fetchClasses(schoolStore.activeSchool.id, session.value.id)
  classes.value = useClassStore().classes
})
</script>@/apps/class/models/controller/class.store.model