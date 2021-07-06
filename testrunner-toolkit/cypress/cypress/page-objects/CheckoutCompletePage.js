class CheckoutCompletePage {
    get screen() {
        return cy.get('#checkout_complete_container');
    }
}

export default new CheckoutCompletePage();
