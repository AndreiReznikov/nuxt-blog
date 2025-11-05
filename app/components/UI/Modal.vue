<template>
  <Transition name="modal">
    <div v-if="show" class="modalMask">
      <div class="modalContainer">
        <div class="modalHeader">
          <slot name="header">стандартный заголовок</slot>
        </div>

        <div class="modalBody">
          <slot name="body">тело по умолчанию</slot>
        </div>

        <!-- <div class="modalFooter">
          <slot name="footer">
            нижний колонтитул по умолчанию
            <button class="modalDefaultButton" @click="$emit('close')">
              OK
            </button>
          </slot>
        </div> -->
      </div>
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps({
  show: Boolean,
});
</script>

<style scoped>
.modalMask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}

.modalContainer {
  max-width: 900px;
  width: 100%;
  max-height: 80%;
  margin: 1rem;
  padding: 1.25rem 1.875rem;
  background-color: var(--color-black);
  color: var(--color-white);
  border-radius: 6px;
  border: 2px solid var(--color-white);
  transition: all 0.3s ease;
  overflow-y: auto;
}

.modalHeader h3 {
  margin-top: 0;
}

.modalBody {
  margin: 20px 0;
}

.modalDefaultButton {
  float: right;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modalContainer,
.modal-leave-to .modalContainer {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
