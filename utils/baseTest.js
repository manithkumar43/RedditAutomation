require('dotenv').config();
const { test: base, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/LoginPage');

const test = base.extend({
  context: async ({ browser }, use) => {
    const context = await browser.newContext();

    // ✅ Block Google sign-in popup
    await context.route('https://accounts.google.com/**', route => route.abort());

    await use(context);
    await context.close();
  },

  page: async ({ context }, use) => {
    const page = await context.newPage();

    // ✅ Login using the LoginPage class
    const loginPage = new LoginPage(page);
    await loginPage.login(process.env.REDDIT_USERNAME, process.env.REDDIT_PASSWORD);

    await use(page);
    await page.close();
  }
});

module.exports = { test, expect };
