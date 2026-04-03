import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';
 

test.describe('Checkout Flow', () => {
  let checkoutPage;

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    checkoutPage = new CheckoutPage(page);

    // 1. Login
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await page.goto('https://www.saucedemo.com/checkout-step-one.html');
  });

test('Should complete the checkout process', async ({ page }) => {
  // Buyer information
  await checkoutPage.fillInformation('Sunlight', 'Friday', '1234');
  await expect(checkoutPage.page).toHaveURL(/checkout-step-two/);
});
});