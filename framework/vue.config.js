module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "src/styles/index.scss";
      `
      }
    }
  }
}
