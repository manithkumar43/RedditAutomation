const { expect } = require('@playwright/test');

class SettingsPage {
  constructor(page) {
    this.page = page;
    this.userMenuButton = '//*[@id="expand-user-drawer-button"]/span/span/div/faceplate-partial/span/span/img';
    this.settingsLink = page.getByRole('link', { name: 'Settings' });
    this.headerText = page.locator('//*[@id="main-content"]/div/h1');
    this.emailTab = page.locator('//*[@id="settings-tabgroup"]/a[6]');
  }

  async goToSettings() {
    await this.page.click(this.userMenuButton);
    await this.settingsLink.click();
  }

  async validateUserIsOnSettingsPage() {
    await expect(this.headerText).toBeVisible();
    const heading = await this.headerText.textContent();
    expect(heading).toContain('Settings');
  }

  async openEmailTab() {
    await this.emailTab.click();
  }

  async toggleSettingByLabel(labelText) {
    const toggle = this.page.locator(`[role="checkbox"][aria-label="${labelText}"]`);
   await expect(toggle).toBeVisible();

    const state = await toggle.getAttribute('aria-checked');
    const isOn = state === 'true';

    console.log(`🔍 "${labelText}" is currently ${isOn ? 'ON' : 'OFF'}`);
    //await this.page.waitForTimeout(1000);

    await toggle.click();
    //await this.page.waitForTimeout(1000);

    const newState = await toggle.getAttribute('aria-checked');
    const isNowOn = newState === 'true';

    console.log(`✅ "${labelText}" is now ${isNowOn ? 'ON' : 'OFF'}`);
    await expect(toggle).toHaveAttribute('aria-checked', isOn ? 'false' : 'true');
    return isNowOn;
  }

  /**
   * 🔁 Toggle multiple settings using an array of labels
   * @param {string[]} labelsArray
   */
  async toggleMultipleSettingsByLabels(labelsArray) {
    for (const label of labelsArray) {
      console.log(`\n👉 Toggling setting: "${label}"`);
      await this.toggleSettingByLabel(label);
    }
  }
}

module.exports = { SettingsPage };
