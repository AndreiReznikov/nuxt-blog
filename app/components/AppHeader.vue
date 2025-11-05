<template>
  <header class="header">
    <div class="leftSideContainer">
      <div class="logoContainer">
        <NuxtLink to="/">
          <NuxtImg src="/logo/logo.png" width="120" height="44" alt="Logo" />
        </NuxtLink>
      </div>
      <nav class="navbar">
        <ul class="navbarList">
          <li class="navbarListItem">
            <NuxtLink class="navbarLink" to="/posts"> Все посты </NuxtLink>
          </li>
          <li class="navbarListItem">
            <NuxtLink class="navbarLink" to="/authors"> Авторы </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="rightSideContainer">
      <NuxtLink to="/profile">
        <NuxtImg src="/profile.svg" width="40" height="40" alt="Profile" />
      </NuxtLink>
      <span v-if="!!user" class="signout" @click="signout">
        Выйти
      </span>
    </div>
  </header>
</template>

<script setup>
const { user, clear: clearSession } = useUserSession();

async function signout() {
  await clearSession();
  await navigateTo("/signin");
}
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  height: 90px;
  padding: 20px 40px;
  border-bottom: 1px solid white;
}

.leftSideContainer {
  display: flex;
  align-items: center;
  gap: 120px;
}

.navbarList {
  display: flex;
  gap: 25px;
  list-style-type: none;
}

.navbarLink {
  color: var(--color-white);
  text-decoration: none;
}

.rightSideContainer {
  display: flex;
  align-items: center;
  gap: 40px;
}

.signout {
  cursor: pointer;
}
</style>
