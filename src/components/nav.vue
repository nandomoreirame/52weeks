<template>
  <nav class="nav">
    <router-link class="nav__link" to="/">Home</router-link>
    <router-link class="nav__link" to="/about">About</router-link>
  </nav>
</template>

<script>
export default {
  name: 'nav'
}
</script>

<style lang="scss" scoped>
.nav {
  text-align: center;
  padding: 30px;

  &__link {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
