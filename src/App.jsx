import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" Component={Home} />
        <Route path="/cart" Component={Cart} />
      </Routes>
    </>
  );
};

export default App;
