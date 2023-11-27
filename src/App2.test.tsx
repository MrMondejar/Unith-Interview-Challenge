// Imports
import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import App2 from './App2';

// Tests
describe('Renders main page correctly', async () => {
  it('it app2', () => {
    render(<App2 />);
    const titleElement = screen.getByText(/hello/)
    expect(titleElement).toBeInTheDocument()
  });
});
