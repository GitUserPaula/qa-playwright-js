import { test, expect } from "@playwright/test";
import { LoginPage } from '../pages/LoginPage.js';

test('Failed Login with Locked Out User', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('locked_out_user', 'secret_sauce');

  await expect(loginPage.errorMessage).toContainText('locked out');
});