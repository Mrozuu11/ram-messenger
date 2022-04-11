<template>
  <div class="navbar mobile-padding">
    <img class="navbar__logo" src="@/assets/rick_morty_PNG7 2.svg" alt="logo" />
    <div class="navbar__links">
      <router-link class="navbar__link" to="/">New Message</router-link>
      <router-link class="navbar__link" to="/history">History</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  height: 56px;
  justify-content: space-between;
  align-items: center;
  background: #f5f8fb;
  &__logo {
    width: 126px;
    height: 36px;
  }
  &__links {
    font-size: $regular-font-size;
    display: flex;
    gap: 24px;
    line-height: 20px;
  }
}
@media only screen and (min-width: 760px) {
  .navbar {
    height: 70px;
    padding: 0 200px;
    &__links {
      gap: 20px;
    }
  }
}
</style>
