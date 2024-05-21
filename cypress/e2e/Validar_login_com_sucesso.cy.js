describe('Funcionalidade login', () => {
  it('Validar login realiza com sucesso', () => {

    //acessar a pagina
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')

    //preencher os campos
    cy.get(':nth-child(2) > td > input').type('vinicius')
    cy.get(':nth-child(4) > td > input').type('senha')
    cy.get(':nth-child(6) > td > input').type('mask014')

    
    //clicar no botão enviar 
    cy.get('td > .btn').click()

    //verificar se o cadastro foi realizado com sucesso
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text', 'mask014')

  })
}) 

