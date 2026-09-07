const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
  
  e2e: {
         baseUrl: process.env.BASE_URL,

  env: {
        BASE_URL: process.env.BASE_URL,
        VALID_USERNAME: process.env.VALID_USERNAME,
        VALID_PASSWORD: process.env.VALID_PASSWORD
     
      },

      setupNodeEvents(on, config) {
      return config; 
    }

  }
});


