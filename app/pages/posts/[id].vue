<template>
  <main class="main">
    <div class="container">
      <NuxtLink class="link" to="/posts">&#8592; Ко всем постам</NuxtLink>
      <article class="article">
        <h1 class="title">{{ post?.title }}</h1>
        <div class="postInfo">
          <span class="info">{{ post?.author?.name }}</span>
          {{ " " }}
          <span class="info">{{ post?.creationDate }}</span>
        </div>
        <p class="description">{{ post?.description }}</p>
      </article>
      <div v-show="post?.comments?.length" class="commentsWrapper">
        <h3 class="commentsTitle">Комментарии:</h3>
        <Comment v-for="comment in post?.comments" :comment />
      </div>
    </div>
  </main>
</template>

<script setup>
const route = useRoute();

const { data: post } = await useFetch(
  `http://localhost:8000/posts/${route.params.id}`
);
</script>

<style scoped>
.main {
  max-width: 1200px;
  min-height: calc(100vh - 90px);
  margin: 0 auto;
  padding: 3rem;
}

.container {
  display: flex;
  flex-direction: column;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
}

.link {
  color: var(--color-white);
}

.article {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
}

.title {
  margin-top: 25px;
}

.info {
  margin-top: 5px;
  font-size: 14px;
}

.description {
  margin-top: 15px;
}

.commentsWrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

.commentsTitle {
  text-decoration: underline;
}
</style>
