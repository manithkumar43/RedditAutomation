require('dotenv').config();
const { test: base, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/LoginPage');

// Extend Playwright's base test
const test = base.extend({
  // Auto-login before each test
  page: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(process.env.REDDIT_USERNAME, process.env.REDDIT_PASSWORD);
    await use(page);
  }
});

module.exports = { test, expect };
