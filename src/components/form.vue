<template>
  <form class="form" @submit.prevent="bankDeposit">
    <div class="form__group">
      <label class="form__label" for="firstDeposit" v-text="$t('label')" />
      <input
        class="form__input"
        type="text"
        id="firstDeposit"
        v-model="firstDepositComputed"
        :placeholder="`${$t('eg')} 1`"
      >
    </div>
  </form>
</template>

<script>
import { mapState } from 'vuex'
import pkg52weeks from '52weeks-pkg'

export default {
  computed: {
    ...mapState({
      deposit: ({ deposit }) => deposit,
      bank: ({ bank }) => bank,
      total: ({ total }) => total
    }),
    firstDepositComputed: {
      get () {
        return this.deposit
      },
      set (deposit) {
        if (deposit === '') {
          this.$store.commit('TOGGLE_TABLE', false)
        }

        this.$store.commit('SET_FIRST_DEPOSIT', deposit)
        this.bankDeposit()
      }
    }
  },
  methods: {
    async bankDeposit () {
      const firstDeposit = parseInt(this.deposit)

      if (firstDeposit <= 0 || isNaN(firstDeposit)) {
        this.$store.commit('SET_BANK_DEPOSITS', [])
        this.$store.commit('SET_BANK_TOTAL', 0)
        this.$store.commit('TOGGLE_TABLE', false)
        return
      }

      const bank = await pkg52weeks(firstDeposit)
      const { total } = bank[bank.length - 1]

      this.$store.commit('SET_BANK_DEPOSITS', bank)
      this.$store.commit('SET_BANK_TOTAL', total)
      this.$store.commit('TOGGLE_TABLE', true)
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  margin-bottom: 1.875rem /* 30/16 */;

  &__group {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }

  &__label {
    cursor: pointer;
    font-weight: 600;
    margin: 0 10px 5px 0;
  }

  &__input {
    appearance: none;
    background-color: #fff;
    border: 1px solid #42b983;
    border-radius: 0.375rem /* 6/16 */;
    color: #2c3e50;
    line-height: 2.625rem /* 42/16 */;
    max-width: 100px;
    padding: 0 0.75rem /* 12/16 */;
    text-align: center;
    transition: background-color .12s ease-in-out,
      border-color .12s ease-in-out;

    &:hover,
    &:focus,
    &:active {
      border-color: darken(#42b983, 5%);
      outline: none;
    }
  }
}
</style>
