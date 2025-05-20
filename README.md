# 🧪 OrangeHRM Cypress E2E Automation
This project is an end-to-end (E2E) test automation suite for OrangeHRM using Cypress. It focuses on validating key workflows such as login, forgot password, and dashboard navigation using the Page Object Model (POM) design pattern for better maintainability.

---
## 🔍 Purpose
The goal is to automate and verify critical user flows in the OrangeHRM web application, such as:
- Logging in as an admin
- Requesting a password reset
- Navigating the dashboard

## 📌 Tech Stack
- Cypress for E2E testing
- JavaScript (ES6)
- Page Object Model (POM)

## 📂 Folder Structure
  ```bash
  cypress/
  │
  ├── e2e/
  │   ├── dashboard.cy.js         # Dashboard page test
  │   ├── forgotPassword.cy.js    # Forgot password test
  │   └── login.cy.js             # Login test
  │
  ├── pages/                      # Page object model classes
  │   ├── dashboardPage.js
  │   ├── forgotPasswordPage.js
  │   └── loginPage.js
  │
  └── support/
      ├── commands.js             # Custom Cypress commands
      └── e2e.js                  # Support setup
  ```

## ▶️ How to Run
1. Clone the Repository
   ```bash
   git clone https://github.com/redyana18/cypress-orangehrm-automation.git
   cd cypress-orangehrm-automation
2. Install Dependencies
   ```bash
   npm install
3. Run Cypress Test Runner
To launch Cypress in interactive mode:
   ```bash
   npx cypress open
4. To run all tests headlessly:
   ```bash
   npx cypress run

## 🧪 Test Cases
File	Description
- login.cy.js	Tests login with valid credentials
- forgotPassword.cy.js	Tests reset password functionality
- dashboard.cy.js	Verifies admin dashboard content

## 🔗 Demo App
This test automation runs against the official OrangeHRM demo site:
🔗 https://opensource-demo.orangehrmlive.com/
