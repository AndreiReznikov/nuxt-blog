<template>
  <main class="main">
    <div class="container">
      <h1>Авторы</h1>
      <div class="wrapper">
        <NuxtLink
          v-for="author in data"
          class="link"
          :to="`authors/${author?.id}`"
        >
          <article class="article" :key="author?.id">
            <h2>{{ author?.name }}</h2>
            <p>Посты: {{ author?.posts?.length ?? 0 }}</p>
          </article>
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const { data } = await useFetch("http://localhost:8000/users");
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  max-width: 1200px;
  min-height: calc(100vh - 90px);
  margin: 0 auto;
  padding: 3rem;
}

.container {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  border: 1px solid white;
  border-radius: var(--border-radius);
}

.link {
  display: flex;
  width: 100%;
  color: var(--color-white);
}

.article {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 120px;
  padding: 0 2rem;
  border-bottom: 1px solid white;
}
</style>
