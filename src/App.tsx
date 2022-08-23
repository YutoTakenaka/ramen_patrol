import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ComponentIndex from "./components/pages/ComponentIndex";
import TopPageIndex from "./components/pages/TopPageIndex";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<TopPageIndex />} />
        <Route path={"/component"} element={<ComponentIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
