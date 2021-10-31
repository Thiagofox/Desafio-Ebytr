import React from 'react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testes na pagina App', () => {
  it('Página principal da aplicação React - buscar o texto"learn react"/', () => {
    const { getByText } = renderWithRouter(<App />);
    expect(getByText(/learn react/i)).toBeInTheDocument();
  });
});
