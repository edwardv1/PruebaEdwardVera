/// <reference types="cypress" />

describe('Web Page', () => {
  it('check visit to web page', () => {
    cy.visit("/")
  })
})

/*
describe('Web Page', () => {
  it('check visit to web page', () => {
    cy.visit('https://www.google.com/')
  })
  it('button google', () => {
    cy.visit('https://www.google.com/')
    cy.get('.gNO89b')
  })
})
*/





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
