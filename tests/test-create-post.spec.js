const { test, expect } = require('../utils/baseTest');
const { CreatePostPage } = require('../Pages/CreatePostPage');

test('Create post and validate errors', async ({ page }) => {
  const createPostPage = new CreatePostPage(page);

  await createPostPage.clickCreatePost();
  await createPostPage.selectCommunity('r/NewPostFlowTesting');
  await createPostPage.fillPostTitle('Invalid title');

  await createPostPage.validateViewMoreAndViewLess();
  await createPostPage.validateBannedWord('Title with cucumber', 'NO CUCUMBERS!');
  await createPostPage.validateBannedWord('Title with bad', 'You may not have "bad" in your title.');
});

