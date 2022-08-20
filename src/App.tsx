import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ComponentIndex from "./components/pages/ComponentIndex";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/component"} element={<ComponentIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
