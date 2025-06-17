const { test, expect } = require('../utils/baseTest');
const { toggleLabels } = require('../utils/settingLabels')
const { SettingsPage } = require('../Pages/SettingsPage');

// Test to verify that a user can navigate to the Settings page
test('User can navigate to Settings page', async ({ page }) => {
  const settingsPage = new SettingsPage(page);

  // Navigate to the Settings page using the page object method
  await settingsPage.goToSettings();

  // Assert that the Settings page header is visible and contains the correct text
  await expect(settingsPage.headerText).toBeVisible();
  const heading = await settingsPage.headerText.textContent();
  expect(heading).toContain('Settings');

  await settingsPage.openEmailTab();

  /**const label = 'Private messages & admin notifications'; // Change this to test other toggles
  const finalState = await settingsPage.toggleSettingByLabel(label); **/

  const finalState  = await settingsPage.toggleMultipleSettingsByLabels(toggleLabels);
  // Optional Step 5: Log final state
  console.log(`🎯 Final toggle state for "${toggleLabels}" is ${finalState ? 'ON' : 'OFF'}`);
});
// Test to verify that the user can toggle settings on the Email Settings page
