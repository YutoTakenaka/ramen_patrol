import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./components/pages/SignUp";
import Components from "./components/pages/Components";
import MyPage from "./components/pages/MyPage";
import TopPage from "./components/pages/TopPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<TopPage />} />
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"/component"} element={<Components />} />
        <Route path={"/mypage"} element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
