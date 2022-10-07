describe("App.spec.cy.ts", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  //Edit
  it("Click en boton Edit abre modal con titulo 'Bet edit'.", () => {
    cy.get("table tbody tr td:last button:2th").click({ force: true });
    cy.get(".modal .h4").should("have.text", "Bet edit");
  });
});
