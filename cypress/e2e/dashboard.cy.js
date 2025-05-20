import DashboardPage from "../pages/DashboardPage";

const dashboardPage = new DashboardPage();

describe("Dashboard Directory Test - Validated Page Load", () => {
  it("should login and navigate to directory page successfully", () => {
    dashboardPage.visit();
    dashboardPage.login("Admin", "admin123");

    cy.url().should("include", "/dashboard");

    cy.wait(2000); // tunggu sebentar agar sidebar termuat dengan baik
    dashboardPage.navigateToDirectory();

    dashboardPage.verifyDirectoryPage();
  });
});
