import { visitFunctionBody } from "typescript"

describe('Test Counter App Master', () => {


  beforeEach(() => {
    cy.visit('/')

  })

  it('1.	Add all the items (Zero) in the card', () => {
    //zero 1
    cy
      .get(':nth-child(2) > .row > :nth-child(2) > .btn-secondary > .fa')
      .dblclick()
    //zero 2
    cy
      .get(':nth-child(3) > .row > :nth-child(2) > .btn-secondary > .fa')
      .dblclick()
    //zero 3
    cy
      .get(':nth-child(4) > .row > :nth-child(2) > .btn-secondary > .fa')
      .dblclick()
    //zero 4
    cy
      .get(':nth-child(5) > .row > :nth-child(2) > .btn-secondary > .fa')
      .dblclick()

    //cy.get('.navbar-brand > .badge').invoke('text').then(cy.log)
    //cy.log('item is added successfully')

    cy.get('.navbar-brand > .badge').should((val) => {
      expect(val, 'all the items are added successfully').to.contain('8')

    })

  })



  it('2.	Add item (Zero) in the cart and refresh', () => {
    //add item
    //zero 1
    cy
      .get(':nth-child(2) > .row > :nth-child(2) > .btn-secondary > .fa')
      .dblclick()
    //zero 2
    cy
      .get(':nth-child(3) > .row > :nth-child(2) > .btn-secondary > .fa')
      .dblclick()
    //zero 3
    cy
      .get(':nth-child(4) > .row > :nth-child(2) > .btn-secondary > .fa')
      .dblclick()
    //zero 4
    cy
      .get(':nth-child(5) > .row > :nth-child(2) > .btn-secondary > .fa')
      .dblclick()

    cy.wait(3000)

    //refresh
    cy.get('.btn-success')
      .click()

    //verify cart is empty 
    cy.get('.navbar-brand > .badge').should((val) => {
      expect(val, 'the cart has been empty').to.contain('0')

    })


  })

  it('3. Delete any item and check if the count is reduced', () => {
    //increment
    //zero 1
    cy
    .get(':nth-child(2) > .row > :nth-child(2) > .btn-secondary > .fa')
    .click()

    cy.wait(3000)

    //decrement
    //zero1
    cy.get(':nth-child(2) > .row > :nth-child(2) > .btn-info > .fa')
      .click()()

    //verify     
    cy.get('.navbar-brand > .badge').should((val) => {
      expect(val, 'all the items are deleted successfully').to.contain('0')
    })

  })

  it('4.	Add any item in the cart and remove it', () => {
    //increment
    //zero 4
    cy
      .get(':nth-child(5) > .row > :nth-child(2) > .btn-secondary > .fa')
      .click()

    cy.wait(3000)

    //remove zero1
    cy
      .get(':nth-child(5) > .row > :nth-child(2) > .btn-danger > .fa')
      .click()

    cy.get('.navbar-brand > .badge').should((val) => {
      expect(val, 'item is removed successfully').to.contain('0')



    })


  })

})