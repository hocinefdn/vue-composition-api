<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalCardRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note ?</p>
        <button @click="closeModal" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        Are you sure you want to delete this note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <div class="buttons">
          <button @click="closeModal" class="button">Cancel</button>
          <button
            class="button is-danger"
            @click="storeNotes.deleteNote(noteId)"
          >
            Delete
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
/* 
    Imports
*/
import { onMounted, onUnmounted, ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useStoreNotes } from "@/stores/storeNotes";

const storeNotes = useStoreNotes();
/* 
    Props
*/

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  noteId: {
    type: String,
    required: true,
  },
});

/* 
    Emits
*/

const emit = defineEmits(["update:modelValue"]);

/* 
    Close modal 
*/

const closeModal = () => {
  emit("update:modelValue", false);
};

/* 
    Click outside to close
 */

const modalCardRef = ref(null);
onClickOutside(modalCardRef, closeModal);

/* 
    Keyboard control
 */

const handleKeyboard = (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
};

onMounted(() => {
  document.addEventListener("keyup", handleKeyboard);
});

onUnmounted(() => {
  document.removeEventListener("keyup", handleKeyboard);
});
</script>
