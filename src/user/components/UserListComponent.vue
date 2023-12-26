<template>
    <div>
        <h3>All Users</h3>
            <UserProfileCard v-for="user in users"
            :key="user.id"
            :user="user"
            />
    </div>

</template>
<script lang="ts">
    
    import { PropType, defineComponent } from 'vue';
    import UserProfileCard from './UserProfileCard.vue'
import { UserInterface } from '../models/user.interface';
    
    export default defineComponent({
        name: 'UserListComponent',

        components: {
            // UserComponent
            UserProfileCard
        },
        props: {
            users: Array as PropType<UserInterface[]>,
            default: () => []
        },
        setup(props){
            
        }
        
    })
</script>