import React from 'react';
// import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
// import renderWithRouter from './renderWithRouter';
import App from '../App';
// import Task from '../components/task';

describe('Testes na pagina App', () => {
  it('Verifica se há no documento "To Do App"', () => {
    const { getByText } = render(<App />);
    expect(getByText(/To Do App/i)).toBeInTheDocument();
  });
});

describe('Testa se todos os botões são renderizado junto da aplicação', () => {
  it('testa se o botão "Todos" foi renderizado', () => {
    const { getByText } = render(<App />);
    const buttonTodos = getByText('Todos');
    expect(buttonTodos).toBeInTheDocument();
    expect(buttonTodos.type).toBe('button');
  });

  it('testa se o botão "Pendentes" foi renderizado', () => {
    const { getByText } = render(<App />);
    const buttonPendentes = getByText('Pendentes');
    expect(buttonPendentes).toBeInTheDocument();
    expect(buttonPendentes.type).toBe('button');
  });

  it('testa se o botão "Concluídos" foi renderizado', () => {
    const { getByText } = render(<App />);
    const buttonConcluidos = getByText('Concluídos');
    expect(buttonConcluidos).toBeInTheDocument();
    expect(buttonConcluidos.type).toBe('button');
  });

  it('testa se o botão "A-B-C" foi renderizado', () => {
    const { getByText } = render(<App />);
    const buttonABC = getByText('A-B-C');
    expect(buttonABC).toBeInTheDocument();
    expect(buttonABC.type).toBe('button');
  });

  it('testa se o botão "Recentes" foi renderizado', () => {
    const { getByText } = render(<App />);
    const buttonRecentes = getByText('Recentes');
    expect(buttonRecentes).toBeInTheDocument();
    expect(buttonRecentes.type).toBe('button');
  });

  it('testa se o botão "Inserir nova tarefa" foi renderizado', () => {
    const { getByText } = render(<App />);
    const buttonInsert = getByText('Inserir nova tarefa');
    expect(buttonInsert).toBeInTheDocument();
    expect(buttonInsert.type).toBe('button');
  });
});

// describe('Testa se ao clicar em uma nova tarefa aparece um caixa de texto', () => {
//   it('Ao clicar no botão "Inserir nova task aparece uma text area"', () => {
//     const { getByTestId, getByText } = renderWithRouter(<Task />);
//     const buttonInsert = getByText('Inserir nova tarefa');
//     console.log(ButtonInsert);
//     fireEvent.click(buttonInsert);
//     const inputCheckbox = getByTestId('input-checkbox');
//     console.log(inputCheckbox);
//     expect(inputCheckbox).toBeInTheDocument();
//     fireEvent.click(inputText);
//     fireEvent.change(inputText, { target: { value: 'Tarefa 1' } });
//     fireEvent.click();
//     expect(queryByText('Tarefa 1')).toBeInTheDocument();
//   });
// });

// describe('testa as funcionalidades da aplicação', () => {
//   it('testa que há um botão apagar na aplicação', () => {
//     const { getByText } = render(<Task />);
//     const buttonApagar = getByText('Apagar');
//     expect(buttonApagar).toBeInTheDocument();
//     expect(buttonApagar.type).toBe('button');
//   });
// });
