<template>
  <div>
    <c-form />
    <c-table :show="show" :bank="bank" />
    <footer v-if="show">
      <h3>
        <span v-text="`${$t('saved')}:`" /> <strong v-text="$n(total, 'currency')" />
      </h3>
    </footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {
    cForm: () => import('@/components/form'),
    cTable: () => import('@/components/table')
  },
  computed: {
    ...mapState({
      show: state => (state.showTable && state.total > 0),
      bank: state => state.bank,
      total: state => state.total
    })
  }
}
</script>

<style lang="scss" scoped>
footer {
  padding: 15px;
  background-color: rgba(#42b983, .07);
  border: 1px solid #ececec;
  border-top: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-weight: 500;
    font-size: 1.5rem /* 24/16 */;
    display: flex;
    align-items: center;
    justify-content: center;

    strong {
      font-size: 2.625rem /* 42/16 */;
      font-weight: 800;
      text-decoration: underline;
      margin-left: 15px;
    }
  }
}
</style>
