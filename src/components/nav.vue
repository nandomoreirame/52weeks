<template>
  <nav class="nav">
    <div class="container">
      <ul class="nav__bar">
        <li><router-link class="nav__link" to="/">52 <span v-text="$t('weeks')" /></router-link></li>
        <li><router-link class="nav__link" to="/about">{{ $t('about') }}</router-link></li>
      </ul>
      <ul class="nav__lang">
        <li
          v-for="(lang, i) in langs"
          :key="`lang${i}`"
          v-show="$i18n.locale !== lang.key"
        >
          <a
            :href="`#lang-${lang.key}`"
            :value="lang.key"
            class="nav__link"
            @click.prevent="changeLang(lang.key)"
          >
            <span v-text="lang.title" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    langs: [
      { key: 'en', title: 'english' },
      { key: 'pt-br', title: 'português' }
    ]
  }),
  methods: {
    changeLang (lang) {
      localStorage.setItem('lang', lang)
      this.$i18n.locale = lang
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  text-align: center;
  padding: 10px 0;
  background-color: rgba(#42b983, .07);
  border-bottom: 1px solid rgba(#000, .075);

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0 -10px;

    li {
      display: inline-block;
      padding: 0 10px;
    }
  }

  &__link {
    font-weight: 600;
    color: #2c3e50;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.875rem /* 14/16 */;

    &.active,
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
