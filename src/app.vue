<template>
  <div>
    <c-nav />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    cNav: () => import('@/components/nav')
  }
}
</script>

<style lang="scss">
@import "@/assets/reset.scss";
@import "@/assets/base.scss";
</style>
