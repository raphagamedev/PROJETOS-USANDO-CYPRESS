describe ('projeto-adopet-login', () => {
    //antes de cada caso rode...
    beforeEach(()=>{

        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
        cy.intercept('POST', '**/login*', {
            statusCode: 401,
            body: { message: 'Falha no login. Consulte suas credenciais.' },
        }).as('stubPost');
        

    })

    //bloco de verificaçao.
    it('Verificar mensagem de falha no login', () => {
           
        
        cy.get('[data-test="submit-button"]').click();
        cy.wait(3000);
        cy.contains('É necessário informar um endereço de email').should('be.visible');
        cy.contains('Insira sua senha').should('be.visible');
       
       
    })
    
    //bloco que mesmo com as informações certas vai apreesentar o resultado esperado
    it('Deve falhar mesmo que os campos sejam preenchidos corretamente', ()=> {
        cy.login('raphaelcp9022@gmail.com', 'Senha1234');
        cy.wait('@stubPost', { timeout: 10000 });
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
    })
   

    

})