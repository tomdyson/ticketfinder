describe('My First Test', () => {
    it('Visits Ticketmaster', () => {
        cy.visit('https://www.ticketmaster.co.uk/event/1F005710D6056351')
        cy.contains('Accept').click()
        cy.get('[data-testid=tselectionSpinbuttonMinus]').click()
        cy.contains('Find Tickets').click()
        cy.wait(10000)
        cy.get('.Stack-sc-1xpa7k4-0').should('contain', 'Other Options')
        cy.get('.Stack-sc-1xpa7k4-0').should('contain', 'Resale Tickets')
    })
})