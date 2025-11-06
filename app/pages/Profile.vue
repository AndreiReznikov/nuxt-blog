<template>
  <main class="main">
    <div class="container">
      <div class="info">
        <h1>{{ profile?.name ?? "Без имени" }}</h1>
        <div>{{ profile?.email ?? "Без email" }}</div>
      </div>
      <div v-show="profile?.posts?.length > 0" class="postsContainer">
        <h2 class="title">Ваши посты</h2>
        <div class="posts">
          <div class="postsWrapper">
            <Post v-for="post in profile?.posts" :key="post.id" :post="post" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
definePageMeta({
  middleware: ["authenticated"],
});

const { user } = useUserSession();

const { data: profile } = await useAsyncData(
  "user-data",
  () => $fetch(`/api/authors/${user.value.id}`),
  {
    watch: [user],
    immediate: !!user.value?.id,
  }
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

.info,
.posts {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.info {
  border: 1px solid white;
  border-radius: var(--border-radius);
  padding: 25px;
}

.title {
  margin: 40px 0;
  text-decoration: underline;
}

.postsWrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
