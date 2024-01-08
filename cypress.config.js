const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default









module.exports = defineConfig({
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 90000,
  chromeWebSecurity: false,
  waitForAnimations: true,
  requestTimeout: 60000,
  responseTimeout: 90000,
  numTestsKeptInMemory: 10,
  viewportWidth: 1920,
  viewportHeight: 1080,
  video:true,
  screenshotOnRunFailure:true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
        on('file:preprocessor', cucumber())
      
        
    },
    specPattern:"cypress/e2e/Cypress_Testing_Assignment/*.feature",
    },
});
