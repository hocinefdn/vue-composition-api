<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      ref="addEditNoteRef"
      bgColor="link"
      placeholder="Edit Note"
      label="Edit Note"
    >
      <template v-slot:buttons>
        <RouterLink to="/" class="button is-link is-light">Cancel</RouterLink>
        <button
          class="button is-link has-background-link"
          :disabled="!noteContent"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
/*
  imports
*/

import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { RouterLink } from "vue-router";
import { useNotesStore } from "@/stores/storeNotes";

// route

const route = useRoute();

// store

const notesStore = useNotesStore();

// note
const noteContent = ref(notesStore.getNoteContent(route.params.id));
</script>
