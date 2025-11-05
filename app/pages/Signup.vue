<template>
  <main class="main">
    <div class="formContainer">
      <form method="post" class="form">
        <h2>Регистрация</h2>
        <div class="inputsWrapper">
          <input class="input" placeholder="Логин" required />
          <input class="input" type="email" placeholder="Email" required />
          <input class="input" type="password" placeholder="Пароль" required />
        </div>
        <div class="buttonWrapper">
          <button class="button">Регистрация</button>
        </div>
        <span class="subtext">
          Уже есть аккаунт Nuxt Blog?&nbsp;
          <NuxtLink class="signinLink" to="/signin"> Войти </NuxtLink>
        </span>
      </form>
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
  gap: 8px;
  width: 100%;
  margin: 1rem 0;
}

.input {
  width: 100%;
  height: 35px;
  padding: 0 12px;
  border: 1px solid white;
  border-radius: 6px;
}

.button {
  height: 35px;
  margin: 1rem 0;
  color: white;
  background-color: black;
  border: 1px solid white;
  border-radius: 6px;
  cursor: pointer;
}

.subtext {
  font-size: 14px;
}

.signinLink {
  color: var(--color-white);
  text-decoration: underline;
}
</style>
