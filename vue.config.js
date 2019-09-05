module.exports = {
  lintOnSave: true,
  configureWebpack: {
    devtool: 'source-map',
    devServer: {
      disableHostCheck: true,
      clientLogLevel: 'info',
      watchOptions: {
        poll: true
      }
    }
  },
  css: {
    modules: true,
    sourceMap: true
  },
  pluginOptions: {
    i18n: {
      locale: 'pt-br',
      fallbackLocale: 'pt-br',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
