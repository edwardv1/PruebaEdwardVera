describe('Web Page', () => {
  it('check visit to web page', () => {
    cy.visit('https://prueba-edward-vera.vercel.app/')
  })
})

// describe("Test grupo de botones", ()=> {
//   it('check visit to web page', () => {
//       cy.visit('https://prueba-edward-vera.vercel.app/')
//   })
//   it("Deberia estar el boton +New presente", () => {
//       cy.get('div.bg-gray-300').should('exist');
//       // cy.get('button[name="buttonOpenModalCreateProduct"]').should('be.enabled')
//       //cy.contains('button', '+ New');
//   })
// })

/*
bucar por clase
cy.get(.buttonCreate)
bucar por id
cy.get(#buttonCreate)
Si quiero ver deshabilitado el boton:
.should('be.desabled')
*/