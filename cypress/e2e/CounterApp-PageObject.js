import{CounterPage} from '../PageObject/CounterPage'

describe('Given user to acccess counter app', () => {

  const counterApp = new CounterPage;
  
  beforeEach(() => {
    cy.visit('/')
  })

  it('1.	Add all the items (Zero) in the card two times', () => {
    counterApp.Increment_Item1()
    counterApp.Increment_Item2()
    counterApp.Increment_Item3()
    counterApp.Increment_Item4()
    counterApp.validation_itemAdded()
   

  })

  it('2.	Add item (Zero) in the cart and refresh', () => {
    
    counterApp.Increment_Item1()
    cy.wait(3000)
    counterApp.refresh() 
    counterApp.validation_itemRefresh() 

  })

  it('3. Delete any item and check if the count is reduced', () => {
    counterApp.Increment_Item2()
    counterApp.Increment_Item3()
    cy.wait(3000)
    counterApp.delete_Item3() 
    counterApp.validation_itemDeleted() 
   

  })

  it('4.	Add any item in the cart and remove it', () => {
    counterApp.Increment_Item1()
    cy.wait(3000)
    counterApp.Decrement_Item1() 
    counterApp.validation_itemReduced() 

  })




})