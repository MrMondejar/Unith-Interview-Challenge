import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App"
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { BrowserRouter, MemoryRouter } from "react-router-dom"


test("renders a title with Redux in it", () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>,
    { wrapper: BrowserRouter }
  );
    expect(container).toHaveTextContent("Unith");
  });
  