describe("Forgot Password Test", () => {
  it("should show success message after submitting username", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode"
    );

    // Isi form
    cy.get('input[name="username"]').type("Admin");

    // Submit
    cy.get('button[type="submit"]').click();

    // Tunggu navigasi dan cek konten halaman
    cy.url().should("include", "sendPasswordReset");
    cy.contains("Reset Password link sent successfully").should("be.visible");
  });
});
