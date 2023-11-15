import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders an h1 element with text "DHIS2 Dashboards"', () => {
  render(<App />);
  const h1Element = screen.getByRole('heading', {
    level: 1,
    name: 'DHIS2 Dashboards',
  });

  expect(h1Element).toBeInTheDocument();
});
