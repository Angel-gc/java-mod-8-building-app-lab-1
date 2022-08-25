describe("empty spec", () => {
  const appURL = "http://localhost:4200/";
  const testMessage = "hi"
  it("passes", () => {
    cy.visit(appURL);

    cy.contains("New Message").click();
    cy.url().should("include", "contactList");

    cy.contains("Start Message").click();
    cy.url().should("equal", appURL);

    cy.get("input[name=user-message-input]").type(testMessage);
    cy.contains("Send").click()
    cy.get("app-conversation-thread-component").should("contain", testMessage);
  });
});