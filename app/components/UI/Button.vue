<template>
  <button class="button" v-bind="$attrs">
    <slot />
  </button>
</template>

<style>
.button {
  min-width: 6.25rem;
  height: 2.1875rem;
  padding: 0 1rem;
  color: var(--color-white);
  background-color: var(--color-black);
  border: 1px solid var(--color-white);
  border-radius: 6px;
  cursor: pointer;
}
</style>
