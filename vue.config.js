const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false, // Disable hydration mismatch details
        __VUE_OPTIONS_API__: true, // Enable the options API if you're using it
        __VUE_PROD_DEVTOOLS__: false, // Disable devtools in production
      }),
    ],
  },

  pluginOptions: {
    vuetify: {
      // Vuetify loader options can go here if needed
    },
  },
});
