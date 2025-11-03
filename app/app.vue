<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Nuxt Blog",
  meta: [{ name: "description", content: "My Nuxt Blog." }],
  bodyAttrs: {
    class: "body",
  },
});
</script>

<style lang="css">
:root {
  --color-black: #000;
  --color-white: #fff;
}

* {
  box-sizing: border-box;
}

html,
body {
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--color-white);
  background: var(--color-black);
}
</style>
