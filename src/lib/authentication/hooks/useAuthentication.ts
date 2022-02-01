import {
  login as firebaseLogin,
  signUp as firebaseSignUp,
  resetPassword as firebaseResetPassword,
  getUserData as firebaseGetUserData,
} from "../services/firebaseAuthentication";
import {
  LoginPayload,
  ResetPasswordPayload,
  SignUpPayload,
} from "../services/firebaseAuthentication.types";

export const useAuthentication = () => {
  const login = ({ email, password }: LoginPayload) =>
    firebaseLogin({ email, password });

  const register = ({ email, password }: SignUpPayload) =>
    firebaseSignUp({ email, password });

  const resetPassword = ({ email }: ResetPasswordPayload) =>
    firebaseResetPassword({ email });

  const userData = firebaseGetUserData();
  const isUserAuthenticated = !!userData;

  return { login, register, resetPassword, userData, isUserAuthenticated };
};
