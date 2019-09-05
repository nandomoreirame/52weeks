<template>
  <form class="form" @submit.prevent="run">
    <label class="form__label" for="firstDeposit" v-text="$t('label')" />
    <div class="form__group">
      <input class="form__input" type="text" id="firstDeposit" v-model="firstDepositComputed" placeholder="1" autofocus>
      <button class="form__button" type="submit" v-text="$t('calculate')" />
    </div>
  </form>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    totalWeeks: [...Array(52)]
  }),
  mounted () {
    this.run()
  },
  computed: {
    ...mapState({
      deposit: state => state.deposit,
      bank: state => state.bank,
      total: state => state.total
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
        this.run()
      }
    }
  },
  methods: {
    isNotNumber: n => (n <= 0 || isNaN(n)),
    async bankDeposit (firstDeposit) {
      let deposited = firstDeposit
      let deposit = 0
      let week

      const bank = await this.totalWeeks.map((v, i) => {
        deposit = (i === 0) ? firstDeposit : firstDeposit + (firstDeposit * i)
        deposited = (i === 0) ? deposited : deposited + deposit
        week = (i + 1)

        return {
          deposit: deposit,
          total: deposited,
          week: `${week < 10 ? `0${week}` : week}`
        }
      })

      this.$store.commit('SET_BANK_DEPOSITS', bank)
      this.$store.commit('SET_BANK_TOTAL', deposited)
      this.$store.commit('TOGGLE_TABLE', true)
    },
    async run () {
      const firstDeposit = parseInt(this.deposit)

      if (this.isNotNumber(firstDeposit)) {
        this.$store.commit('SET_BANK_DEPOSITS', [])
        this.$store.commit('SET_BANK_TOTAL', 0)
        this.$store.commit('TOGGLE_TABLE', false)
        return
      }

      await this.bankDeposit(firstDeposit)
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  margin-bottom: 1.875rem /* 30/16 */;

  &__group {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__input,
  &__button {
    padding: 0 0.75rem /* 12/16 */;
    border: 2px solid #42b983;
    appearance: none;
    background-color: #fff;
    color: #333;
    line-height: 2.625rem /* 42/16 */;
    text-align: center;
    transition: background-color .12s ease-in-out,
      border-color .12s ease-in-out;

    &:hover,
    &:focus,
    &:active {
      outline: none;
    }
  }

  &__input {
    border-top-left-radius: 0.375rem /* 6/16 */;
    border-bottom-left-radius: 0.375rem /* 6/16 */;
    border-right: 0;

    &:hover,
    &:focus,
    &:active {
      border-color: darken(#42b983, 5%);
    }
  }

  &__label {
    display: block;
    margin-bottom: 5px;
    cursor: pointer;
    font-weight: 600;
  }

  &__button {
    border-left: 0;
    background-color: #42b983;
    border-color: #42b983;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    color: #fff;
    cursor: pointer;
    border-top-right-radius: 0.375rem /* 6/16 */;
    border-bottom-right-radius: 0.375rem /* 6/16 */;

    &:hover,
    &:focus {
      background-color: darken(#42b983, 5%);
      border-color: darken(#42b983, 5%);
    }
  }
}
</style>
