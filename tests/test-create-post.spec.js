const { test, expect } = require('@playwright/test');
const { CreatePostPage } = require('../Pages/CreatePostPage');

test('Verify view more, view less, and banned word errors', async ({ page }) => {
  const createPostPage = new CreatePostPage(page);

  await createPostPage.clickCreatePost();
  await createPostPage.selectCommunity('r/NewPostFlowTesting');

  // Fill an invalid title to trigger error messages
  await createPostPage.fillPostTitle('Invalid title');
  await createPostPage.validateViewMoreAndViewLess();

  // Validate banned word errors
  await createPostPage.validateBannedWord('Title with cucumber', 'NO CUCUMBERS!');
  await createPostPage.validateBannedWord('Title with bad', 'You may not have "bad" in your title.');
});
