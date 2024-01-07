/// <reference types="cypress" />

const productRef = {
  category: "Pokemon",
  description: "Pokemon toy",
  id: "58c54b69-e623-4f92-80aa-184aaa61ce7p",
  image: "https://toppng.com/uploads/preview/mega-ho-pokemon-ho-oh-mega-evolutio-11563223813t4zspwbv64.png",
  price: 45,
  rating: {
      count: 1,
      rate: 4
  },
  title: "Prueba9"
}

describe('Web Page', () => {
  it('should display the new product created in the last page of de DataTable', () => {
    cy.visit("/")
    cy.get('#buttonOpenModalCreate').click()
    cy.get('#inputName > #inputNameForm').type(productRef.title)
    cy.get('#inputImage > #inputNameForm').type(productRef.image)
    cy.get('#inputCategoryForm').type(productRef.category)
    cy.get('#inputPriceForm').type(productRef.price)
    cy.get('#inputReviewForm').type(productRef.rating.rate)
    cy.get('#inputDescriptionForm').type(productRef.description)
    cy.get('[data-testid="buttonCreate"]').click()
    //Verifico si el producto se ha creado exitosamente
    cy.wait(2000)
    
    // Ir a la ultima pagina y seleccionar el último elemento encontrado con data-testid "productTitle"
    cy.get('#buttonPaginationLastPage').click()
    cy.get('[data-testid="productTitle"]:last').should('have.text', productRef.title);
  })
  it.only('should display success message when product is created', () => {
    cy.visit("/")
    cy.get('#buttonOpenModalCreate').click()
    cy.get('#inputName > #inputNameForm').type(productRef.title)
    cy.get('#inputImage > #inputNameForm').type(productRef.image)
    cy.get('#inputCategoryForm').type(productRef.category)
    cy.get('#inputPriceForm').type(productRef.price)
    cy.get('#inputReviewForm').type(productRef.rating.rate)
    cy.get('#inputDescriptionForm').type(productRef.description)
    cy.get('[data-testid="buttonCreate"]').click()
    // Esperar a que el toast aparezca
    cy.wait(1000)
    // Espera a que el toast-container aparezca --> Target --> cy.get('.Toastify__toast-body > :nth-child(2)')
    cy.get('.Toastify__toast').should('be.visible');
    //! cy.get('.Toastify__toast').should('exist');
    cy.get('.Toastify__toast').should('contain.text', 'The product has been created.');
    //! cy.get('.Toastify__toast').contains('Product created successfully').should('exist');
  });
  
  it('should display error message when product already exists', () => {
    cy.visit("/")
    cy.get('#buttonOpenModalCreate').click()
    cy.get('#inputName > #inputNameForm').type(productRef.title)
    cy.get('#inputImage > #inputNameForm').type(productRef.image)
    cy.get('#inputCategoryForm').type(productRef.category)
    cy.get('#inputPriceForm').type(productRef.price)
    cy.get('#inputReviewForm').type(productRef.rating.rate)
    cy.get('#inputDescriptionForm').type(productRef.description)
    cy.get('[data-testid="buttonCreate"]').click()
    // Esperar a que el toast aparezca
    cy.wait(1000)
    // Verificar el contenido del mensaje de error
    cy.get('.Toastify__toast').should('be.visible');
    cy.get('.Toastify__toast').should('contain.text', 'The product already exists.');
  });
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
