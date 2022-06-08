import { visitFunctionBody } from "typescript"

describe('Test Counter App Master', () => {


  beforeEach(() => {
    cy.visit('/')

  })

  it.only('1.	Add all the items (Zero) in the card', () => {
    //line 1
    cy
      .get(':nth-child(2) > .row > :nth-child(2) > .btn-secondary > .fa')
      .dblclick()
    //line 2
    cy
      .get(':nth-child(3) > .row > :nth-child(2) > .btn-secondary > .fa')
      .dblclick()
    //line 3
    cy
      .get(':nth-child(4) > .row > :nth-child(2) > .btn-secondary > .fa')
      .dblclick()
    //line 4
    cy
      .get(':nth-child(5) > .row > :nth-child(2) > .btn-secondary > .fa')
      .dblclick()
     cy
      .get('.navbar-brand > .badge').should('have.text', '4')

  })

  it('2.	Add item (Zero) in the cart and refresh', () => {
    //add item
    cy
      .get(':nth-child(3) > .row > :nth-child(2) > .btn-secondary > .fa')
      .click()
    cy
      .log('all the items are added successfully')
    cy.wait(3000)
    //refresh
    cy.get('.btn-success')
      .click()
    //verify cart is empty 
    cy.get('.navbar-brand > .badge')
      .should('contain', '0');


  })

  it('3. Delete any item and check if the count is reduced', () => {
    //increment
    cy
      .get(':nth-child(2) > .row > :nth-child(2) > .btn-secondary > .fa')
      .click()
    cy
      .get(':nth-child(3) > .row > :nth-child(2) > .btn-secondary > .fa')
      .click()
    cy

      .log('all the items are added successfully')
    cy.wait(3000)
    //delete
    cy
      .get(':nth-child(2) > .row > :nth-child(2) > .btn-danger > .fa')
      .click()
    cy
      .get('.navbar-brand > .badge')
      .should('have.text', '1');
    cy

      .log('item is deleted successfully”')

  })

  it('4.	Add any item in the cart and remove it', () => {
    //increment
    cy
      .get(':nth-child(2) > .row > :nth-child(2) > .btn-secondary > .fa')
      .click()
    cy
      .get(':nth-child(3) > .row > :nth-child(2) > .btn-secondary > .fa')
      .click()
    cy
      .log('all the items are added successfully')
    cy.wait(3000)

    //decrement
    cy
      .get(':nth-child(2) > .row > :nth-child(2) > .btn-info > .fa')
      .click()
    cy
      .get('.navbar-brand > .badge')
      .should("contain", "1");
    cy
      .log('item is reduced successfully')
  })







})