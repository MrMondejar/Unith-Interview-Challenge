import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import { store } from "../../app/store";
import { BrowserRouter, MemoryRouter } from "react-router-dom"

import { ItemsGrid } from './itemsGrid';

describe('ItemsGrid', () => {
  it('renders', () => {
    render(
      <Provider store={store}>
        <ItemsGrid />
      </Provider>,
      { wrapper: BrowserRouter }
    )
    expect(true).toBeTruthy()
  })
})