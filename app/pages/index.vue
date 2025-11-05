<template>
  <main class="main">
    <div class="container">
      <h1 class="title">Добро пожаловать на Nuxt Blog!</h1>
      <h2 class="subtitle">
        Здесь вы можете создавать посты, а также читать и комментировать посты
        других авторов.
      </h2>
      <h4 v-if="!loggedIn" class="subtitle">
        Чтобы стать автором
        <NuxtLink class="link" to="/signin">войдите</NuxtLink> или
        <NuxtLink class="link" to="/signup">зарегистрируйтесь</NuxtLink>
      </h4>
    </div>
  </main>
</template>

<script setup>
const { loggedIn } = useUserSession();
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  min-height: calc(100vh - 90px);
  margin: 0 auto;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.title,
.subtitle {
  text-align: center;
  text-decoration: none;
}

.link {
  color: var(--color-white);
  text-decoration: underline;
}
</style>
