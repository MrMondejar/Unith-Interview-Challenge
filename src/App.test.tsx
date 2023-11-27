// Imports
import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter, MemoryRouter } from "react-router-dom"

// import userEvent from "@testing-library/user-event";
// import "@testing-library/jest-dom";

import App from './App';

// Tests
describe('Renders main page correctly', async () => {
  it('it renders', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      { wrapper: BrowserRouter }
    );
    const titleElement = screen.getByText('Unith challenge')
    expect(titleElement).toBeInTheDocument();
  });
});