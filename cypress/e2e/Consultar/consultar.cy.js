/// <reference types="Cypress"/>


describe('teste de consulta', () => {
    it('consulta com dados em branco', () => {
        
        cy.visit("https://blogdoagi.com.br/")
        cy.get('.site-header-above-section-right > .ast-builder-layout-element').click()
        cy.get('#search-field').type(" ")
        cy.get('.site-header-above-section-right > .ast-builder-layout-element').click()
        cy.get('.page-title').should('contain','Resultados')
    });

    it('consulta informando dados', () => {
        
        cy.visit("https://blogdoagi.com.br/")
        cy.get('.site-header-above-section-right > .ast-builder-layout-element').click()
        cy.get('#search-field').type("Teste")
        cy.get('.site-header-above-section-right > .ast-builder-layout-element').click()
        cy.get('.page-title').should('contain','Resultados')
    });
    it('consulta sem dados para a consulta', () => {
        
        cy.visit("https://blogdoagi.com.br/")
        cy.get('.site-header-above-section-right > .ast-builder-layout-element').click()
        cy.get('#search-field').type("vdp")
        cy.get('.site-header-above-section-right > .ast-builder-layout-element').click()
        cy.get('.page-title').should('contain','Resultados')
    });
});