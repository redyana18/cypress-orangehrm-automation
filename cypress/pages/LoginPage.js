class LoginPage {
  visit() {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  }

  fillUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  fillPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  clickLogin() {
    cy.get('button[type="submit"]').click();
  }

  interceptLogin() {
    // Intercept endpoint login yang sesuai (gunakan wildcard untuk fleksibilitas)
    cy.intercept("POST", "**/auth/validate").as("loginRequest");
  }
}

export default LoginPage;
