<template>
  <table class="table" v-if="show">
    <tr>
      <th v-text="$t('weeks')" />
      <th v-text="$t('todeposit')" />
      <th v-text="$t('deposited')" />
    </tr>
    <tr v-for="(d, i) in bank" :key="i">
      <td>
        <span v-text="`${$t('week')} ${d.week}`" />
      </td>
      <td>
        <span v-text="$n(d.deposit, 'currency')" />
      </td>
      <td>
        <span v-text="$n(d.total, 'currency')" />
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    bank: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  border: 1px solid #ececec;
  margin-right: auto;
  margin-left: auto;

  th {
    background-color: rgba(#42b983, .07);
    text-transform: uppercase;
    font-size: 0.75rem /* 12/16 */;
  }

  th,
  td {
    text-align: center;
    padding: 10px;
    border-top: 1px solid #ececec;
    border-bottom: 1px solid #ececec;
  }

  td {
    font-size: 1rem;
    // line-height: 1;
  }
}
</style>
