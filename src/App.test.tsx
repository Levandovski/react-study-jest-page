import React from 'react';
import { render, fireEvent, cleanup, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom";
import { App } from './App';



describe('Teste da página de login', () => {
    
    afterEach(cleanup);

    it('Testando renderização dos componentes', async () =>{
        
        const { getByText, getByTestId } = render(<App/>);
        
        //Validando o texto da pagina 

        const textPrincipal= await waitFor(
            () => getByText('Bem Vindo ao Site!')
        );

        expect(textPrincipal).toBeInTheDocument();

        //Validando o input login

        const formLogin = await waitFor(
            () => getByTestId('form-login')
        );

        expect(formLogin).toBeDefined();

        //Validando o input password

        const formPassword = await waitFor(
            () => getByTestId('form-password')
        );

        expect(formPassword).toBeDefined();

        //Validando o button logar

        const buttonLogar = await waitFor(
            () => getByTestId('button-logar')
        );

        expect(buttonLogar).toBeDefined();


    });

    it('Testando passagem de valores para os inputs', async () =>{
        
        const { getByText, getByTestId } = render(<App/>);


        //Variavel para verificar login

        const login="jesse@hotmail.com";

        //Pegando os componentes do input login

        const formLogin = await waitFor(
            () => getByTestId('form-login')
        );

        //Validando os componentes do input login

        expect(formLogin).toBeDefined();

        //Inserindo valor no input login

        fireEvent.change(formLogin, {
            target:{value:login}
        })

        //Variavel para verificar a senha

        const password="123321";

        //Pegando os componentes do input password

        const formPassword = await waitFor(
            () => getByTestId('form-password')
        );

        //Validando os componentes do input password

        expect(formPassword).toBeDefined();

        //Inserindo valor no input de password

        fireEvent.change(formPassword, {
            target:{value:password}
        })

    })

    it("Testando método logar completo", async () => {
        const { getByText, getByTestId } = render(<App/>);


        //Variavel para verificar login

        const login="jesse@hotmail.com";

        //Pegando os componentes do input login

        const formLogin = await waitFor(
            () => getByTestId('form-login')
        );

        //Validando os componentes do input login

        expect(formLogin).toBeDefined();

        //Inserindo valor no input login

        fireEvent.change(formLogin, {
            target:{value:login}
        })

        //Variavel para verificar a senha

        const password="123321";

        //Pegando os componentes do input password

        const formPassword = await waitFor(
            () => getByTestId('form-password')
        );

        //Validando os componentes do input password

        expect(formPassword).toBeDefined();

        //Inserindo valor no input de password

        fireEvent.change(formPassword, {
            target:{value:password}
        })

       //Validando o button logar

       const buttonLogar = await waitFor(
          () => getByTestId('button-logar')
       );

       expect(buttonLogar).toBeDefined();

       //Validando método logar com o botão

       fireEvent.click(buttonLogar);

       

    })
    
})