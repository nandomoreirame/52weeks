import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  showTable: true,
  deposit: '1',
  bank: [],
  total: 0
}

const mutations = {
  'TOGGLE_TABLE' (state, payload) {
    state.showTable = !!payload
  },

  'SET_FIRST_DEPOSIT' (state, payload) {
    state.deposit = payload
  },

  'SET_BANK_DEPOSITS' (state, payload) {
    state.bank = payload
  },

  'SET_BANK_TOTAL' (state, payload) {
    state.total = payload
  }
}

const actions = {
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
