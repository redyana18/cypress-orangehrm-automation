import LoginPage from "../pages/LoginPage";

const loginPage = new LoginPage();

describe("Login Test with POM and Intercept", () => {
  it("Login with valid credentials", () => {
    loginPage.interceptLogin();
    loginPage.visit();
    loginPage.fillUsername("Admin");
    loginPage.fillPassword("admin123");
    loginPage.clickLogin();

    // Terima status 200 atau 302
    cy.wait("@loginRequest")
      .its("response.statusCode")
      .should("be.oneOf", [200, 302]);

    // Validasi berhasil login
    cy.url().should("include", "/dashboard");
    cy.contains("Time at Work").should("be.visible");
  });
});
