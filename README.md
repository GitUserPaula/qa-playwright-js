## 🚀 Automation Lab Demo

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=Playwright&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)


This repository contains a professional automated testing suite for [SauceDemo](https://www.saucedemo.com/), developed using **Playwright** with **JavaScript**. The project follows the **Page Object Model (POM)** design pattern to ensure scalability, maintainability, and clean code standards.

## 🛠️ Tech Stack

* **Framework:** [Playwright](https://playwright.dev/)
* **Language:** JavaScript (ES6+)
* **Pattern:** Page Object Model (POM)
* **Reporting:** Playwright HTML Reporter

## 🏗️ Project Architecture

The project is organized to separate test logic from page interactions:

* `pages/`: Contains Page Object classes (e.g., `LoginPage.js`, `InventoryPage.js`, `CheckoutPage.js`).
* `tests/`: Contains the test specifications (e.g., `shopping-cart.spec.js`, `checkout.spec.js`).
* `playwright.config.js`: Global configuration for the automation framework.

## 🧪 Features Covered

- [x] **Authentication:** Successful login and error handling (Locked out users).
- [x] **Inventory Management:** Adding specific products by name and dynamic list interaction.
- [x] **Shopping Cart Integrity:** Validating item counts and data persistence.
- [x] **Checkout Flow:** End-to-End (E2E) process from shipping info to order confirmation.
- [x] **Automated Reporting:** Visual HTML reports with step-by-step execution details.

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v16 or higher)
* npm (installed with Node.js)

1. Clone the repository:

``` bash
git clone
```
2. Install dependencies:

``` bash
npm install
```
3. Install Playwright browsers:

``` bash
npx playwright install
```

4. 🏃 Running Tests
Run all tests in Headless mode:

``` bash
npx playwright test
```
Run tests with UI Mode (Interactive):

``` bash
npx playwright test --ui
```
Generate and open HTML Report:

``` bash
npx playwright test --reporter=html
npx playwright show-report
```

### 📈 Testing Best Practices Implemented
- [x] Actionability Checks: Using { force: true } where necessary to handle complex UI elements.

- [x] Dynamic Locators: Selecting elements by data-test attributes and text filtering.

- [x] Hooks: Using beforeEach to manage session state and navigation efficiently.

- [x] Describe Blocks: Logical grouping of tests for better report readability.

---

Developed with 💚 by Pau