const { LoginPage } = require('../Pages/LoginPage');

(async () => {
  await LoginPage.loginAndSaveAuthState();
})();
// This script logs in to Reddit and saves the authentication state to 'authState.json'.
// You can run this script to generate the auth state file before running your tests.
// Make sure to have your environment variables set for REDDIT_USERNAME and REDDIT_PASSWORD.
// Usage: node utils/saveAuthState.js
// Ensure you have the necessary environment variables set in a .env file or your environment.
// Example .env file:
// REDDIT_USERNAME=your_username
// REDDIT_PASSWORD=your_password