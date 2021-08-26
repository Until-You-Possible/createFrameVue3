module.exports = {
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
