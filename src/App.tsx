import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./components/pages/SignUp";
import Components from "./components/pages/Components";
import MyPage from "./components/pages/MyPage";
import TopPage from "./components/pages/TopPage";
import Login from "./components/pages/Login";
import { NotFoundPage } from "./components/pages/NotFoundPage";
import { CreatePage } from "./components/pages/CreatePage";
import { EditPage } from "./components/pages/EditPage";
import { AuthProvider } from "./providers/useAuth";
import { RedirectPage } from "./components/pages/RedirectPage";

export const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<TopPage />} />
          <Route path={"/component"} element={<Components />} />
          <Route path={"/profile"} element={<MyPage />} />
          <Route path={"/create"} element={<CreatePage />} />
          <Route path={"/edit/:id"} element={<EditPage />} />
          <Route path={"redirect"} element={<RedirectPage />} />
          <Route path={"/signup"} element={<SignUp />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/*"} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};
