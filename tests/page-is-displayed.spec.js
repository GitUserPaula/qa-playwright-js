import { test, expect } from "@playwright/test";

test("Login page should be displayed correctly", async ({ page }) => {
  // 1. Navigate to SauceDemo
  await page.goto('https://www.saucedemo.com/');

  // 2. Verify the title (this is consistent)
  // The title of this page is "Swag Labs"
  await expect(page).toHaveTitle(/Swag Labs/);

  // 3. Verify that the login button is visible (good practice)
  const loginButton = page.locator('[data-test="login-button"]');
  await expect(loginButton).toBeVisible();

  console.log('Test passed on SauceDemo! 🍔');

  // 4. Take a screenshot for confirmation
  await page.screenshot({ path: 'saucedemo-home.png' });
});