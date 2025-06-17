const { expect } = require('@playwright/test');

class CreatePostPage {
  constructor(page) {
    this.page = page;
    this.createPostButton = 'text=Create post';
    this.communityDropdown = 'button:has-text("Select a community")';
    this.communitySearchBox = '#post-submit-community-picker input';
    this.postTitleInput = 'textarea[name="title"]';
    this.viewMoreButton = 'button:has-text("View 1 more")';
    this.viewLessButton = 'button:has-text("View less")';
    this.errorMessages = '.trailing-icon.invalid';
    this.cucumberError = 'text=NO CUCUMBERS!';
    this.badWordError = 'text=You may not have "bad" in your title.';
    this.postButton = 'button:has-text("Post")';
  }

  // Method to click the "Create Post" button - created by Manith
  async clickCreatePost() {
    await this.page.click(this.createPostButton);
  }

  // Method to select a community from the dropdown - created by Manith
  async selectCommunity(communityName) {
    await this.page.click(this.communityDropdown);
    await this.page.fill(this.communitySearchBox, communityName);
    await this.page.click(`text=${communityName}`);
  }

  // Method to fill the post title input field - created by Manith
  async fillPostTitle(title) {
    await this.page.fill(this.postTitleInput, title);
  }

  // Method to count the number of error messages displayed - created by Manith
  async countErrorMessages() {
    return await this.page.locator(this.errorMessages).count();
  }

  // Method to validate the "View More" and "View Less" functionality - created by Manith
  async validateViewMoreAndViewLess() {
    const beforeViewMore = await this.countErrorMessages();

    await this.page.click(this.viewMoreButton);
    const afterViewMore = await this.countErrorMessages();
    expect(afterViewMore).toBeGreaterThan(beforeViewMore);

    await this.page.click(this.viewLessButton);
    const afterViewLess = await this.countErrorMessages();
    expect(afterViewLess).toBeLessThan(afterViewMore);
  }

  // Method to validate banned words in the post title and ensure the Post button is disabled - created by Manith
  async validateBannedWord(title, expectedError) {
    await this.fillPostTitle(title);
    const errorLocator = this.page.locator(`text=${expectedError}`);
    await expect(errorLocator).toBeVisible();

    // Ensure the Post button is disabled
    const postButtonLocator = this.page.locator(this.postButton);
    await expect(postButtonLocator).toBeDisabled();
  }
}

module.exports = { CreatePostPage };
