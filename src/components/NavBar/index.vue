<template>
  <div class="navbar mobile-padding">
    <img
      class="navbar__logo"
      src="https://s3-alpha-sig.figma.com/img/03c2/67d8/ee4312bb955f49a27347d92bcb504967?Expires=1647216000&Signature=Eux3rGumRB88XghaMt4-YyALQnl-1dVg3USuobHIFKHjcv5tJSDP5BywnCcG4cB1QeNrpf3jlIVB844TUQd1kuzbtj2f2ZWi3TWMX5sfdyWrvk1UKieXRqC9aU9t2QON3Zkfwvp2WhUrIni3NL3R8QGacO65YkY4UGOuvt7j5lsvXPGScEnAyxC4UXSlmtHbOhYvQGt41oJRLZ~0JFOOGjQI2UetKLyWaAL9PQOtLODi5eFPosdTjWSv0W1Ih25FakpT3dT4g7JC52OhIgyRZH6IZibuN-txkz~dqYgRWbysWNCR-mnfMrdOnVHymZVPJyhK0GYjl95JZpHr2QZn~Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      alt="logo"
    />
    <div class="navbar__links">
      <router-link class="link" to="/">New Message</router-link>
      <router-link class="link" to="/history">History</router-link>
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
  .navbar__logo {
    width: 126px;
    height: 36px;
  }
  .navbar__links {
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
    .navbar__links {
      gap: 20px;
    }
  }
}
</style>
