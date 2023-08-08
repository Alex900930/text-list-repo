import {render, screen, fireEvent} from '@testing-library/react';
import Buttons from './components/Buttons';

test("Button is called correctly", () => {
  render(<Buttons/>);
  expect(render(<Buttons/>)).toBeTruthy();

});

test('handleOkClick updates state correctly', () => {
  // Renderizar el componente Buttons
  const {getByTestId} = render(<Buttons/>);

  // Seleccionar el botón por su atributo data-testid
  const addButton = getByTestId('add-button');

  // Simular clic en el botón Ok
  fireEvent.click(addButton);

  // Verificar que el estado se ha actualizado correctamente
  // Puedes acceder a los estados y métodos pasados como props si los defines en el componente Buttons
  // Aquí un ejemplo de cómo podría ser (asegúrate de ajustar esto según tu implementación):
  expect(Buttons.setBotonesHabilitados).toHaveBeenCalledWith(false);
  expect(Buttons.setInputValue).toHaveBeenCalledWith('');
  expect(Buttons.setIsAdding).toHaveBeenCalledWith(false);
});


test('toggle buttonOk between "Add" and "Ok"', () => {
  const {getByTestId} = render(<Buttons/>);

  const addButton = getByTestId('add-button');

  // Verificar que el botón no esté deshabilitado inicialmente
  expect(addButton).not.toBeDisabled();

  // Simular clic en el botón
  fireEvent.click(addButton);

  // Verificar que el botón cambie su texto después del clic
  expect(addButton).toHaveTextContent('');
});

test('handleOkClick updates state correctly', () => {
  const mockSetBotonesHabilitados = jest.fn();
  const mockSetInputValue = jest.fn();
  const mockSetIsAdding = jest.fn();

  const {getByTestId} = render(
    <Buttons
      setBotonesHabilitados={mockSetBotonesHabilitados}
      setInputValue={mockSetInputValue}
      setIsAdding={mockSetIsAdding}
      inputValue="Hola"  // Define un valor para inputValue aquí
      buttonOk="Ok"
      setButtonOk={jest.fn()}
    />
  );

  const addButton = getByTestId('add-button');

  // Simular clic en el botón Ok
  fireEvent.click(addButton);

  // Verificar que las funciones se hayan llamado con los valores correctos
  expect(mockSetBotonesHabilitados).toHaveBeenCalledWith(false);
  expect(mockSetInputValue).toHaveBeenCalledWith('');
  expect(mockSetIsAdding).toHaveBeenCalledWith(false);
});




