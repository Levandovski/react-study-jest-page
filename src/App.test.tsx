import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom";
import { App } from './App';



describe('Testando Página', () => {
    
    //afterEach(cleanup);

    it('Teste1', () =>{
        const { getByText, getByTestId } = render(<App/>);
        expect(getByText('Bem Vindo ao Site!')).toBeInTheDocument();
    });
    
})