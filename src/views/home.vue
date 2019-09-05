<template>
  <div class="home">
    <div class="container">
      <h1 v-html="`52 <span>${$t('weeks')}</span>`" />
      <c-52-weeks />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    c52Weeks: () => import('@/components/52weeks')
  }
}
</script>

<style lang="scss" scoped>
.home {
  text-align: center;

  h1 {
    margin: 2.5rem /* 40/16 */ 0;
    font-size: 3.25rem /* 52/16 */;
    text-transform: uppercase;

    span {
      font-weight: 300;
    }
  }
}
</style>
