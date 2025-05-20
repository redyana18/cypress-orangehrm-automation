class DashboardPage {
  visit() {
    cy.visit("/");
  }

  login(username, password) {
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
  }

  navigateToDirectory() {
    cy.get(":nth-child(9) > .oxd-main-menu-item").click(); // Menu Directory
  }

  verifyDirectoryPage() {
    cy.url().should("include", "/directory");
    cy.get(".oxd-topbar-header-title").should("contain", "Directory");
  }
}

export default DashboardPage;
