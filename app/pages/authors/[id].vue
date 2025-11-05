<template>
  <main class="main">
    <div class="container">
      <NuxtLink class="link" to="/authors">&#8592; Ко всем авторам</NuxtLink>
      <div class="info">
        <h1>{{ data.name }}</h1>
        <div>{{ data.email }}</div>
      </div>
      <h2 v-if="data.posts?.length > 0" className="title">Посты автора</h2>
      <div v-else class="noPostsText">У автора нет постов</div>
      <div class="posts">
        <div class="postsWrapper">
          <Post v-for="post in data.posts" :key="post.id" :post />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
definePageMeta({
  middleware: ["authenticated"],
});

const route = useRoute();

const { data } = await useFetch(
  `http://localhost:8000/users/${route.params.id}`
);
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
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

.link {
  color: var(--color-white);
}

.info,
.posts {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.info {
  margin-top: 2rem;
  padding: 25px;
  border: 1px solid white;
  border-radius: var(--border-radius);
}

.postsWrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.title {
  margin: 40px 0;
  text-decoration: underline;
}

.noPostsText {
  margin: 40px 0;
}
</style>
