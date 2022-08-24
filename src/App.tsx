import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Components from "./components/pages/Components";
import TopPage from "./components/pages/TopPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<TopPage />} />
        <Route path={"/component"} element={<Components />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
