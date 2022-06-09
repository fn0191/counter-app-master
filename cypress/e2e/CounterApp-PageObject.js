import{CounterPage} from '../PageObject/CounterPage'

describe('Given user to acccess counter app', () => {

  const counterApp = new CounterPage;
  
  beforeEach(() => {
    cy.visit('/')
  })

  it('1.	Add all the items (Zero) in the card two times', () => {
    counterApp.Increment_Zero1()
    counterApp.Increment_Zero2()
    counterApp.Increment_Zero3()
    counterApp.Increment_Zero4()
    counterApp.validation_itemAdded()
   

  })

  it('2.	Add item (Zero) in the cart and refresh', () => {
    
    counterApp.Increment_Zero1()
    cy.wait(3000)
    counterApp.refresh() 
    counterApp.validation_itemRefresh() 

  })

  it('3. Delete any item and check if the count is reduced', () => {
    counterApp.Increment_Zero4()
    cy.wait(3000)
    counterApp.Decrement_Zero4() 
    counterApp.validation_itemReduced() 
   

  })

  it('4.	Add any item in the cart and remove it', () => {

    counterApp.Increment_Zero4()
    cy.wait(3000)
    counterApp.Remove_Zero4() 
    counterApp.validation_itemDeleted() 
  })




})