import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { CartPage } from '../pages/CartPage.js';

// Grouping tests related to the shopping cart flow
test.describe('Shopping Cart Flow', () => {
  let inventoryPage; // Declare inventoryPage here to use it in multiple tests

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(inventoryPage.headerTitle).toHaveText('Products');
  });

  test('Should add the first item to the cart', async () => {
    await inventoryPage.addFirstProductToCart();
    await expect(inventoryPage.shoppingCart).toHaveText('1');
  });

  test('Should allow entering the cart by clicking the icon', async ({ page }) => {
    await inventoryPage.shoppingCart.click();
    console.log("Actual URL:", page.url());
    await expect(page).toHaveURL(/.*cart.html/);
  });
  });

test.describe('Shopping Cart Integrity', () => {
  
  test('The added product should be the same as the one appearing in the cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    // 1. Saved the product name that we are going to add to the cart
    const expectedName = await inventoryPage.getFirstProductName();
    console.log(`Selected product: ${expectedName}`);

    // 2. Add the product to the cart and navigate to the cart page
    await inventoryPage.addFirstProductToCart();
    await inventoryPage.shoppingCart.click();

    // 3. Saved the product name that appears in the cart
    const actualName = await cartPage.getFirstItemName();

    // 4. Assert that both names are the same
    expect(actualName).toBe(expectedName);
    
    console.log('The data integrity is correct! ✅');
  });

  test('Should add two specific products and verify cart count', async ({page}) => {
    let cartPage;
    let inventoryPage;

    const loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.addProductByName('Sauce Labs Fleece Jacket');
    await inventoryPage.addProductByName('Sauce Labs Onesie');
    await expect(inventoryPage.shoppingCart).toHaveText('2');
    await inventoryPage.shoppingCart.click();

    await expect(cartPage.page).toHaveURL(/.*cart.html/);

  })
  });
