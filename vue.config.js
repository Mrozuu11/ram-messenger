module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss","@/styles/_colors.scss", "@/styles/_element-ui.scss";`,
      },
    },
  },
};
