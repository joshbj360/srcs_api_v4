<template>
  <div class="user-list">
    <!-- <UserListComponent class="user-card" :users="users"/> -->
    <Welcome />
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import { useUserStore } from '@/apps/user/store';
import { UserInterface } from '@/apps/user/models/user.interface';
import Welcome from '@/components/Welcome.vue'


export default {
  components: {
    Welcome
  },

  setup() {
  const userStore = useUserStore()
  const users = ref <UserInterface[]>([])

  // Load users on component mount
  onMounted(async () => {
    // await loadUsers();
  });

  // const loadUsers = async () => {
  //   users.value = await userStore.fetchUsers();
  // };

  return {
    users,
}
  }
}
</script>

<style scoped lang="scss">
  .user-list {
    padding: 20px;
    display: flex;
  }
</style>
