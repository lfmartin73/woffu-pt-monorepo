describe("App.spec.cy.ts", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  //Edit
  it("Click en boton View abre modal con titulo 'Bet view'.", () => {
    cy.get("table tbody tr td:last button:first").click({ force: true });
    cy.get(".modal .h4").should("have.text", "Bet view");
    cy.get(".modal .h4").should("have.text", "Bet view");
  });
});
