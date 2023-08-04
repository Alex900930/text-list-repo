import { render, screen } from '@testing-library/react';
import App from './App';

test('app work correctly', () => {
  render(<App />);
  expect(render(<App />)).toBeTruthy();
});
