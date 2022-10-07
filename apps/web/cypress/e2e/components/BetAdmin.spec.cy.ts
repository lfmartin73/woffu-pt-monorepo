describe("App.spec.cy.ts", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Muestra titulo Bets", () => {
    cy.get("#bet-admin h2").should("have.text", "Bets ");
  });

  it("Muestra tabla con 7 columnas.", () => {
    cy.get("table thead tr:first th").should("have.length", 7);
  });

  it("Encabezado de primera columna tiene el texto ID.", () => {
    cy.get("table thead tr:first th:first").should("have.text", "ID");
  });

  it("Encabezado de ultima columna tiene un boton.", () => {
    cy.get("table thead tr:last th button").should("have.length", 1);
  });

  //Add
  it("Click en boton Add abre modal con titulo 'Bet new'.", () => {
    cy.get("table thead tr th:last button").click({ force: true });
    cy.get(".modal .h4").should("have.text", "Bet new");
  });

  it("Ultima columna de filas de datos tiene 3 botones.", () => {
    cy.get("table tbody tr td:last button").should("have.length", 3);
  });

  //View
  it("Click en boton View abre modal  Ver detalle con titulo 'Bet view'.", () => {
    cy.get("table tbody tr:last td:last button:first").click({ force: true });
    cy.get(".modal .h4").should("have.text", "Bet view");
  });

  it("Click en boton cerrar modal este se cierra.", () => {
    cy.get("table tbody tr:last td:last button:first").click({ force: true });
    cy.get(".modal .modal-header button").click({ force: true });
  });

  
});
