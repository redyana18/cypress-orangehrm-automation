class ForgotPasswordPage {
  visit() {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode"
    );
  }

  enterUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }

  verifySuccessMessage() {
    cy.contains("Reset Password link sent successfully").should("be.visible");
  }
}

export default new ForgotPasswordPage();
