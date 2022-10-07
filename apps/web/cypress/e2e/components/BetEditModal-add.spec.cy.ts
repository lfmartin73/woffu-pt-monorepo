describe("App.spec.cy.ts", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  //Add
  it("Click en boton Add abre modal con titulo 'Bet new'.", () => {
    cy.get("table thead tr th:last button").click({ force: true });
    cy.get(".modal .h4").should("have.text", "Bet new");
  });
});
