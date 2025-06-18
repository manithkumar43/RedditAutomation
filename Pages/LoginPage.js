require('dotenv').config();
const { chromium } = require('@playwright/test');
const fs = require('fs');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginButton = 'text=Log In';
    this.usernameInput = 'input[name="username"]';
    this.passwordInput = 'input[name="password"]';
    this.profileIcon = 'button[aria-label="User menu"]';
  }

  async navigate() {
    await this.page.goto('https://www.reddit.com/');
  }

  async clickLogin() {
    await this.page.click(this.loginButton);
  }

  async enterCredentials(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
  }

  async submitLogin() {
    await this.page.press(this.passwordInput, 'Enter');
  }

  async login(username, password) {
    await this.navigate();
    await this.clickLogin();
    await this.enterCredentials(username, password);
    await this.submitLogin();

    // Wait for successful login
    await this.page.waitForURL('https://www.reddit.com/', { timeout: 15000 });
  }

  static async loginAndSaveAuthState() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    const loginPage = new LoginPage(page);
    await loginPage.login(process.env.REDDIT_USERNAME, process.env.REDDIT_PASSWORD);

    // Save storage state to file
    await context.storageState({ path: 'authState.json' });
    console.log('✅ Saved auth state to authState.json');

    await browser.close();
  }
}

module.exports = { LoginPage };
