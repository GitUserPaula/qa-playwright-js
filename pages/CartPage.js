
export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItemName = page.locator('.inventory_item_name');
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
  }

  async getFirstItemName() {
    return await this.cartItemName.first().innerText();
  }
}