const { defineConfig } = require("cypress");

// async function setupNodeEvents(on, config) {
//   // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
//   await preprocessor.addCucumberPreprocessorPlugin(on, config);
//   on("file:preprocessor", browserify.default(config));
//   // Make sure to return the config object as it might have been modified by the plugin.
//   return config;
// }

module.exports = defineConfig({
  projectId: 'hhdn7q',
  defaultCommandTimeout : 7000,
  chromeWebSecurity : false,
  env : {
    //url : "https://rahulshettyacademy.com/angularpractice/"
    url : "https://clubs.scholastic.com/"
  },
  e2e: {
    setupNodeEvents(on, config) {
    },
    specPattern: 'cypress/integration/TestCases/*.js'
  },
});
