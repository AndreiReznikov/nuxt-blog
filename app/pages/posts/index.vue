<template>
  <main class="main">
    <div class="container">
      <h1 class="title">Все посты</h1>
      <div class="addPostButtonContainer">
        <UIButton class="addPostButton" @click="showModal = true">+ Добавить пост</UIButton>
      </div>
      <div class="postsWrapper">
        <Post v-for="post in data" :post />
      </div>
      <Teleport to="body">
        <UIModal :show="showModal" @close="showModal = false">
          <template #header>
            <h3>Добавить пост</h3>
          </template>
        </UIModal>
      </Teleport>
    </div>
  </main>
</template>

<script setup lang="ts">
const { data } = await useFetch("http://localhost:8000/posts");

const showModal = ref(false);
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
  margin: 0 auto;
}

.title {
  display: flex;
  justify-content: center;
}

.addPostButtonContainer {
  display: flex;
  justify-content: center;
}

.postsWrapper {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1rem;
}
</style>
