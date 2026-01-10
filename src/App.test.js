import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NanoTap header', () => {
  render(<App />);
  const headerElement = screen.getByRole('heading', { name: /^NanoTap$/i });
  expect(headerElement).toBeInTheDocument();
});
