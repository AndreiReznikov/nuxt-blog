<template>
  <main class="main">
    <div class="formContainer">
      <div class="form">
        <h2>Авторизация</h2>
        <div class="inputsWrapper">
          <input class="input" type="email" placeholder="Email" required />
          <input
            class="input"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div class="buttonWrapper">
          <button class="button">Войти</button>
        </div>
        <span class="subtext">
          У вас нет Nuxt Blog аккаунта?
          <NuxtLink class="signupLink" to="/signup"> Создать аккаунт </NuxtLink>
        </span>
      </div>
    </div>
  </main>
</template>

<style>
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

.input {
  width: 100%;
  height: 35px;
  padding: 0 12px;
  border: 1px solid white;
  border-radius: 6px;
}

.between {
  flex: 1;
}

.button {
  width: 100px;
  height: 35px;
  color: white;
  background-color: black;
  border: 1px solid white;
  border-radius: 6px;
  cursor: pointer;
}

.subtext {
  font-size: 14px;
}

.signupLink {
  color: var(--color-white);
  text-decoration: underline;
}
</style>
