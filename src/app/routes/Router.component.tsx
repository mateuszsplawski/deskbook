import {
  BrowserRouter as RouterWrapper,
  Route,
  Routes,
} from "react-router-dom";
import { Login } from "../pages/Login/Login.component";
import { Register } from "../pages/Register/Register.component";
import { ResetPassword } from "../pages/ResetPassword/ResetPassword.component";
import { AppRoutes } from "./Routes";

export const Router = () => {
  return (
    <RouterWrapper>
      <Routes>
        <Route path={AppRoutes.HOME} element={<h1>Home view</h1>} />
        <Route path={AppRoutes.LOGIN} element={<Login />} />
        <Route path={AppRoutes.REGISTER} element={<Register />} />
        <Route path={AppRoutes.RESET_PASSWORD} element={<ResetPassword />} />
      </Routes>
    </RouterWrapper>
  );
};
