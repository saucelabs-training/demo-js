context('Actions', () => {
		beforeEach(() => {
			cy.visit('https://example.cypress.io/commands/actions')
		})
		it('.type() - type into a DOM element', () => {
			// https://on.cypress.io/type
			cy.get('.action-email')
				.type('fake@email.com').should('have.value', 'fake@email.com')
		});

		it('.focus() should focus element', () => {
			cy.get('.action-focus').focus()
				.should('have.class', 'focus')
				.prev().should('have.attr', 'style', 'color: orange;')
		});

		it('.blur() should blur element', () => {
			cy.get('.action-blur').type('About to blur').blur()
				.should('have.class', 'error')
				.prev().should('have.attr', 'style', 'color: red;')
		});

		it('.clear() should clear element', () => {
			cy.get('.action-clear').type('Clear this text')
				.should('have.value', 'Clear this text')
				.clear()
				.should('have.value', '')
		});

		it('.submit() should submit form', () => {
			cy.get('.action-form')
				.find('[type="text"]').type('HALFOFF')
			cy.get('.action-form').submit()
				.next().should('contain', 'Your form has been submitted!')
		});
	})