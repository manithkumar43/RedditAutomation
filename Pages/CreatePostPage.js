const { expect } = require('@playwright/test');
const selectors = require('../selectors/createPost.selectors');

class CreatePostPage {
  constructor(page) {
    this.page = page;
  }

  // Method to click the "Create Post" button - created by Manith
  async clickCreatePost() {
    await this.page.click(selectors.createPostButton);
  }

  // Method to select a community from the dropdown - created by Manith
  async selectCommunity(communityName) {
    await this.page.click(selectors.communityDropdown);
    await this.page.fill(selectors.communitySearchBox, communityName);
    await this.page.click(`text=${communityName}`);
  }

  // Method to fill the post title input field - created by Manith
  async fillPostTitle(title) {
    await this.page.fill(selectors.postTitleInput, title);
  }

  // Method to count the number of error messages displayed - created by Manith
  async countErrorMessages() {
    return this.page.locator(selectors.errorMessages).count();
  }

  // Method to validate the "View More" and "View Less" functionality - created by Manith
  async validateViewMoreAndViewLess() {
    const beforeViewMore = await this.countErrorMessages();

    await this.page.click(selectors.viewMoreButton);
    const afterViewMore = await this.countErrorMessages();
    expect(afterViewMore).toBeGreaterThan(beforeViewMore);

    await this.page.click(selectors.viewLessButton);
    const afterViewLess = await this.countErrorMessages();
    expect(afterViewLess).toBeLessThan(afterViewMore);
  }

  // Method to validate banned words in the post title and ensure the Post button is disabled - created by Manith
  async validateBannedWord(title, expectedError) {
    await this.fillPostTitle(title);

    const errorLocator = this.page.locator(`text=${expectedError}`);
    await expect(errorLocator).toBeVisible();

    // Ensure the Post button is disabled
    const postButtonLocator = this.page.locator(selectors.postButton);
    await expect(postButtonLocator).toBeDisabled();
  }
}

module.exports = { CreatePostPage };
