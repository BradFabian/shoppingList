import React from "react";
import AppNavbar from "./components/AppNavbar";
import Shoppinglist from "./components/ShoppingList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Shoppinglist />
    </div>
  );
}

export default App;
