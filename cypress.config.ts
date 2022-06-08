import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 60000,
    slowTestThreshold: 3000,
    excludeSpecPattern: [
      "**/1-getting-started/*",
      "**/2-advanced-examples/*",
      "**/mytest/*",
    ],
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
