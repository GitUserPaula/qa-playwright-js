export class InventoryPage {
  constructor(page) {
    this.page = page;
    // locators
    this.headerTitle = page.locator('.title'); 
    this.inventoryItems = page.locator('.inventory_item');
    //this.shoppingCart = page.locator('.shopping_cart_link');
    this.shoppingCart = page.locator('#shopping_cart_container a');
  }

  async isVisible() {
    // Verify that the header title is visible to confirm we're on the inventory page
    await this.headerTitle.waitFor({ state: 'visible' });
    return await this.headerTitle.isVisible();
  }

  async addFirstProductToCart() {
    // Add to cart the first product in the inventory list
    await this.inventoryItems.first().getByRole('button', { name: 'Add to cart' }).click();
}

    async getFirstProductName() {
  return await this.inventoryItems.first().locator('.inventory_item_name').innerText();
}


async addProductByName(productName) {
  const productContainer = this.page.locator('.inventory_item', { hasText: productName });
  
  await productContainer.getByRole('button', { name: 'Add to cart' }).click();
  console.log(`Item added to cart: ${productName} ✅`);
}

async validateItemsAddedToCart(expectedCount) {
  const cartCount = await this.shoppingCart.innerText();
  expect(cartCount).toBe(expectedCount.toString());
  console.log(`Cart count is correct: ${cartCount} items in the cart ✅`);
}
  }