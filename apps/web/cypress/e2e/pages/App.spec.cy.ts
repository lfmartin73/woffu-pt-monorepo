describe("App.spec.cy.ts", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Muestra un h1 con texto Woffu", () => {
    cy.get("nav h1").should("have.text", "Woffu");
  });
});
