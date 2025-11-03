<template>
  <article class="article">
    <NuxtLink class="postLink" :to="`/posts/${post?.id}`">
      <h2>{{ post?.title }}</h2>
      <div class="postInfo">
        <span class="info">{{ post?.author?.name }}</span>
        {{' '}}
        <span class="info">{{ post?.creationDate }}</span>
      </div>
      <p class="description">{{ post?.description }}</p>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
defineProps({
  post: Object,
});
</script>

<style scoped>
.article {
  display: flex;
  justify-content: space-between;
}

.postLink {
  display: flex;
  flex-direction: column;
  flex: 1;
  color: var(--color-white);
  text-decoration: none;
}

.description {
  margin-top: 15px;
}

.info {
  font-size: 14px;
}
</style>
