import React from 'react'
import {createRoot } from 'react-dom/client'
// import {
//   BrowserRouter as Router,
// } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './app/store'
import { loadItems } from './features/items/itemsSlice.tsx'
import App from './App.tsx'

const container = document.getElementById('root')!;
const root = createRoot(container);

store.dispatch(loadItems())

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Router> */}
        <App />
      {/* </Router> */}
    </Provider>
  </React.StrictMode>,
)