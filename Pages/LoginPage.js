class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginButton = 'text=Log In'; // Login button on Reddit home page
    this.usernameInput = 'input[name="username"]';
    this.passwordInput = 'input[name="password"]';
    this.submitButton = 'button[type="submit"]';
    this.profileIcon = 'button[aria-label="User menu"]'; // Verifying successful login
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

  }
}

module.exports = { LoginPage };
