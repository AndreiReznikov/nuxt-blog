<template>
  <main class="main">
    <div class="formContainer">
      <form class="form" @submit.prevent="signin">
        <h2>Авторизация</h2>
        <div class="inputsWrapper">
          <UIInput
            v-model="credentials.email"
            type="email"
            placeholder="Email"
            required
          />
          <UIInput
            v-model="credentials.password"
            type="password"
            placeholder="Пароль"
            required
          />
        </div>
        <div class="buttonWrapper">
          <UIButton type="submit">Войти</UIButton>
        </div>
        <span class="subtext">
          У вас нет Nuxt Blog аккаунта?
          <NuxtLink class="signupLink" to="/signup"> Создать аккаунт </NuxtLink>
        </span>
      </form>
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["loggedin"],
});

const { fetch: refreshSession } = useUserSession();

const credentials = reactive({
  email: "",
  password: "",
});

async function signin() {
  try {
    await $fetch("/api/signin", {
      method: "POST",
      body: credentials,
    });

    await refreshSession();
    await navigateTo("/");
  } catch {
    alert("Неверные логин или пароль");
  }
}
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  min-height: calc(100vh - 90px);
  margin: 0 auto;
  padding: 3rem;
}

.formContainer {
  margin-top: 25px;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 280px;
  min-height: 300px;
  padding: 25px;
  border: 1px solid white;
  border-radius: var(--border-radius);
}

.inputsWrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
}

.subtext {
  font-size: 14px;
}

.signupLink {
  color: var(--color-white);
  text-decoration: underline;
}
</style>
