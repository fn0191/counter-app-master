export class CounterPage {

    Increment_Zero1() {
        cy
            .get(':nth-child(2) > .row > :nth-child(2) > .btn-secondary > .fa')
            .dblclick()
    }
    Increment_Zero2() {
        cy
            .get(':nth-child(3) > .row > :nth-child(2) > .btn-secondary > .fa')
            .dblclick()
    }
    Increment_Zero3() {
        cy
            .get(':nth-child(4) > .row > :nth-child(2) > .btn-secondary > .fa')
            .dblclick()
    }
    Increment_Zero4() {
        cy
            .get(':nth-child(5) > .row > :nth-child(2) > .btn-secondary > .fa')
            .dblclick()
    }

    

    Decrement_Zero1() {
        cy.get(':nth-child(2) > .row > :nth-child(2) > .btn-info > .fa')
            .click()
    }
    Decrement_Zero2() {
        cy.get(':nth-child(3) > .row > :nth-child(2) > .btn-info > .fa')
            .click()
    }
    Decrement_Zero3() {
        cy.get(':nth-child(4) > .row > :nth-child(2) > .btn-info > .fa')
            .click()
    }
    Decrement_Zero4() {
        cy.get(':nth-child(5) > .row > :nth-child(2) > .btn-info > .fa')
            .click()
    }


    refresh() {
        cy.get('.btn-success > .fa')
            .click()
    }

    Remove_Zero1() {
        cy.get(':nth-child(2) > .row > :nth-child(2) > .btn-danger > .fa')
            .click()
    }
    Remove_Zero2() {
        cy.get(':nth-child(3) > .row > :nth-child(2) > .btn-danger > .fa')
            .click()
    }
    Remove_Zero3() {
        cy.get(':nth-child(4) > .row > :nth-child(2) > .btn-danger > .fa')
            .click()
    }
    Remove_Zero4() {
        cy.get(':nth-child(5) > .row > :nth-child(2) > .btn-danger > .fa')
            .click()

    }




    clickDecrement(numberOfClicks) {
        cy.get(':nth-child(2) > .row > :nth-child(1) > .badge').then(($btn) => {
            if (btn) {
                for (let n = 0; n < numberOfClicks; n++) {
                    cy.get(':nth-child(2) > .row > :nth-child(2) > .btn-info').click();
                }
            } else {
                return cy.get(':nth-child(2) > .row > :nth-child(2) > .btn-info').click();
            }

        })

    }

    validation_itemAdded() {

        cy.get('.navbar-brand > .badge').should((val) => {
            expect(val, 'all the items are added successfully').to.contain('8')

        })

    }

    validation_itemDeleted() {

        cy.get('.navbar-brand > .badge').should((val) => {
            expect(val, 'item is deleted successfully').to.contain('0')

        })

    }

    validation_itemReduced() {

        cy.get('.navbar-brand > .badge').should((val) => {
            expect(val, 'item is reduced successfully').to.contain('1')

            })

    }

    validation_itemRefresh() {

        cy.get('.navbar-brand > .badge').should((val) => {
            expect(val, 'the cart has been empty').to.contain('0')

        })

    }


    validation_itemIncorrect() {
        cy
            .log('item is incorrect')
        cy.get('.navbar-brand > .badge').then(($body) => {
            if ($body.val()) {
                cy.get('.navbar-brand > .badge').should('have.text', '8')
            } else {
                cy.get('.navbar-brand > .badge').should('not.have.text', '8')
            }
        })

    }

}