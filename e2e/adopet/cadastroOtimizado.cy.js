describe('projeto-adopet-cadastro e login', () => {
    // Antes de cada caso de teste, acessa a página inicial
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.wait(5000);
    });

    //---------------------------------------------------------------------------------------
    // Bloco do Scenario-01 Cadastro Dinamico
        // it('Scenario-01 Cadastro Dinamico', () => {
        //     cy.get('[data-test="register-button"]').click();
        //     cy.wait(3000);
        //     cy.cadastrar(
        //         'Anthony Danilo Duarte',
        //         'anthony_danilo_duarte@iahoo.com',
        //         'Senha123'
        //     );
        //     cy.wait(10000);

        //     // Verifica se o cadastro foi bem-sucedido
            
        //     cy.contains('Já tem conta? Faça seu login:').then((element) => {
        //         if (element.is(':visible')) 
        //         {
        //             cy.log('Scenario-01 Cadastro Dinamico [APROVADO]');
        //             adicionarMensagemVisual('Scenario-01 Cadastro Dinamico - [APROVADO]', 'green');
        //         } 
        //         else
        //         {
        //             cy.log('Scenario-01 Cadastro Dinamico [FALHOU]');
        //             adicionarMensagemVisual('Scenario-01 Cadastro Dinamico - [FALHOU]', 'red');
        //         }
        //     });

        //     cy.wait(3000); // espera para permitir visualizar a mensagem
        // });
    //---------------------------------------------------------------------------------------


    //---------------------------------------------------------------------------------------
    // Bloco do Scenario-02 Login Dinamico
        it('Scenario-02 Login Dinamico', () => {
            cy.get('[data-test="login-button"]').click();
            cy.wait(3000);
            cy.login(
                'anthony_danilo_duarte@iahoo.com',
                'Senha1234'
            );
        
           // Verifica se o login foi bem-sucedido.
            cy.contains('Já tem conta? Faça seu login:', { timeout: 5000 }).then((element) => {
                if (element.is(':visible')) {
                    cy.log('Scenario-02 Login Dinamico [APROVADO]');
                    adicionarMensagemVisual('Scenario-02 Login Dinamico - [APROVADO]', 'green');
                }
            });

            // Verifica se houve falha no login
            cy.contains('Falha no login. Consulte suas credenciais.', { timeout: 5000 }).then((errorElement) => {
                if (errorElement.is(':visible')) {
                    cy.log('Scenario-02 Login Dinamico [FALHOU] - Credenciais Inválidas');
                    adicionarMensagemVisual('Scenario-02 Login Dinamico - [FALHOU] - Credenciais Inválidas', 'red');
                }
            });

            cy.wait(3000); // Espera para permitir visualizar a mensagem

        });
    //---------------------------------------------------------------------------------------

    
    //---------------------------------------------------------------------------------------
    //          Função auxiliar para adicionar mensagens visuais à página

        function adicionarMensagemVisual(texto, cor) {
            cy.document().then((doc) => {
                const mensagem = doc.createElement('div');
                mensagem.innerText = texto;
                mensagem.style.cssText = `
                    position: fixed;
                    top: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: ${cor};
                    color: white;
                    padding: 10px;
                    font-size: 16px;
                    z-index: 9999;
                `;
                doc.body.appendChild(mensagem);
            });
        }
    //---------------------------------------------------------------------------------------
});