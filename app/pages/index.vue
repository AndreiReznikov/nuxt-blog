<template>
  <main class="main">
    <div class="container">
      <h1 class="title">Добро пожаловать на Nuxt Blog!</h1>
      <h2 class="subtitle">
        Здесь вы можете создавать посты, а также читать и комментировать посты
        других авторов.
      </h2>
    </div>
  </main>
</template>

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
  text-decoration: underline;
}
</style>
