import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from "react-router-dom";
import ProductsProvider from "./context/ProductContext";

import "./index.css";
import App from "./App";
import { PaymentProvider } from "./context/PaymentsProviders";

// const rootReducer = combineReducers({
//   shop: productReducer
// });

// const store = createStore(rootReducer);

ReactDOM.render(
  <ProductsProvider>
    <PaymentProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PaymentProvider>
  </ProductsProvider>,
  document.getElementById("root")
);
