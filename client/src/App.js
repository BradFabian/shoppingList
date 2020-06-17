import React from "react";
import AppNavbar from "./components/AppNavbar";
import Shoppinglist from "./components/ShoppingList";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Shoppinglist />
      </div>
    </Provider>
  );
}

export default App;
