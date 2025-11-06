<template>
  <main class="main">
    <div class="container">
      <h1 class="title">Все посты</h1>
      <div class="addPostButtonContainer">
        <UIButton class="addPostButton" @click="showModal = true"
          >+ Добавить пост</UIButton
        >
      </div>
      <div class="postsWrapper">
        <Post v-for="post in posts" :key="post.id" :post />
      </div>
      <Teleport to="body">
        <UIModal :show="showModal" @close="showModal = false">
          <template #header>
            <h3>Добавить пост</h3>
          </template>
          <template #body>
            <div class="formContainer">
              <form class="form">
                <UIInput placeholder="Заголовок..." />
                <textarea class="textarea" placeholder="Описание..." />
                <div class="buttonContainer">
                  <UIButton
                    class="modalButton"
                    type="button"
                    @click="showModal = false"
                  >
                    Отмена
                  </UIButton>
                  <UIButton class="modalButton" type="button">
                    Добавить
                  </UIButton>
                </div>
              </form>
            </div>
          </template>
        </UIModal>
      </Teleport>
    </div>
  </main>
</template>

<script setup>
definePageMeta({
  middleware: ["authenticated"],
});

const { data: posts } = await useFetch("/api/posts");

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

.formContainer {
  display: flex;
  justify-content: center;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  max-width: 42.5rem;
  width: 100%;
  margin-top: 2rem;
}

.textarea {
  width: 100%;
  height: 200px;
  padding: 12px;
  border: 1px solid white;
  border-radius: 6px;
  resize: none;
}

.buttonContainer {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  width: 100%;
}

.modalButton {
  width: 280px;
  height: 35px;
  color: white;
  background-color: black;
  border: 1px solid white;
  border-radius: 6px;
  cursor: pointer;
}

.postsWrapper {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1rem;
}
</style>
