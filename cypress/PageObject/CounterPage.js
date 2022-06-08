export class CounterPage {

    Increment_Item1() {
        cy
            .get(':nth-child(2) > .row > :nth-child(2) > .btn-secondary > .fa')
            .dblclick()
    }
    Increment_Item2() {
        cy
            .get(':nth-child(3) > .row > :nth-child(2) > .btn-secondary > .fa')
            .dblclick()
    }
    Increment_Item3() {
        cy
            .get(':nth-child(4) > .row > :nth-child(2) > .btn-secondary > .fa')
            .dblclick()
    }
    Increment_Item4() {
        cy
            .get(':nth-child(5) > .row > :nth-child(2) > .btn-secondary > .fa')
            .dblclick()
    }



    Decrement_Item1() {
        cy.get(':nth-child(2) > .row > :nth-child(2) > .btn-info')
            .click()
    }
    Decrement_Item2() {
        cy.get(':nth-child(3) > .row > :nth-child(2) > .btn-info')
            .click()
    }
    Decrement_Item3() {
        cy.get(':nth-child(4) > .row > :nth-child(2) > .btn-info')
            .click()
    }
    Decrement_Item4() {
        cy.get(':nth-child(5) > .row > :nth-child(2) > .btn-info')
            .click()
    }


    refresh() {
        cy.get('.btn-success > .fa')
            .click()
    }

    delete_Item1() {
        cy.get(':nth-child(2) > .row > :nth-child(2) > .btn-danger > .fa')
            .click()
    }
    delete_Item2() {
        cy.get(':nth-child(3) > .row > :nth-child(2) > .btn-danger > .fa')
            .click()
    }
    delete_Item3() {
        cy.get(':nth-child(4) > .row > :nth-child(2) > .btn-danger > .fa')
            .click()
    }
    delete_Item4() {
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

        cy.get('.navbar-brand > .badge')
            .then(($item) => {
                expect($item, '4')
            })
        cy
            .log('item is added successfully')

    }

    validation_itemDeleted() {

        cy.get('.navbar-brand > .badge')
            .then(($item) => {
                expect($item, '1')
            })
        cy
            .log('item is deleted successfully')

    }

    validation_itemReduced() {

        cy.get('.navbar-brand > .badge')
            .then(($item) => {
                expect($item, '1')
            })
        cy
            .log('item is reduced successfully')

    }

    validation_itemRefresh() {

        cy.get('.navbar-brand > .badge')
        .then(($item) => {
            expect($item, '0')
        })
        cy
            .log('the cart has been empty 0')

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