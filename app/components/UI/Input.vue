<template>
  <input class="input" v-model.trim="model" v-bind="$attrs" />
</template>

<style scoped>
.input {
  width: 100%;
  height: 2.1875rem;
  padding: 0 0.75rem;
  border: 1px solid var(--color-white);
  border-radius: 6px;
}
</style>

<script setup>
defineProps({
  modelValue: [String, Number],
});

const model = defineModel({ default: "" });
</script>
