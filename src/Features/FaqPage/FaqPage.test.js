import { render, screen } from '@testing-library/react';
import FaqPage from '../PageFaq/FaqPage';

test('renders learn react link', () => {
  render(<FaqPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
