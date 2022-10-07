describe("App.spec.cy.ts", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  //Delete
  it("Click en boton Delete abre modal Confirmacion.", () => {
    cy.get("table tbody tr:last td:last button:last").click({ force: true });
    cy.get(".modal .h4 h5").should(
      "contain",
      "Do you really want to delete this Bet?"
    );
  });
});
