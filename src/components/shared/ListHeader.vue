<template>
    <v-toolbar flat>
        <v-toolbar-title>
            <v-icon icon="icon"></v-icon>
            {{ title }}
        </v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog">
            <template v-slot:activator="{ props }">
                <v-btn class="mb-2" color="primary" dark v-bind="props"> {{ nameOfBtn }}</v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h5"> {{ formTitle }}</span>
                </v-card-title>
                <slot></slot>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn 
                        color="blue-darken-1"
                        variant="text"
                        @click="close()"
                    >Cancel</v-btn>
                    <v-btn 
                        color="blue-darken-1"
                        variant="text"
                        @click="save()"
                    >Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
                <v-card-title class="text-h5"> Are you sure you want to delete?</v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="$emit('emitCancel')">Cancel</v-btn>
                    <v-btn color="blue-darken-1" variant="text" @click="$emit('deleteConfirm')">Ok</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-toolbar>
</template>

<script setup lang="ts">
import { nextTick } from 'vue';
import { computed } from 'vue';
import { watch } from 'vue';
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['emitClose', 'emitSave'])

const props = defineProps({
    _dialog: Boolean,
    _dialogDelete: Boolean,
    itemIndex: Number,
    editedItem: Object,
    newItem: Object,
    formTitle: String,
    title: String,
    nameOfBtn: String
})

const dialog = ref(props._dialog)
const dialogDelete = ref(props._dialogDelete)

watch(dialog, (val) => {
    if(!val) {
        close()
    }
})

watch(dialogDelete, (val) => {
    if (!val) {
        ''
    }
})
function close() {
    dialog.value = false
    emit('emitClose')
}
function save() {
    emit('emitSave')
    close()
}

</script>