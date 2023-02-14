import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { TAuthUser } from "../types/types";

type TAuth = {
  loginUser: TAuthUser;
  setLoginUser: Dispatch<SetStateAction<TAuthUser>>;
  token: string;
  setAuthenticate: (value: string) => void;
  isLoginUser: boolean;
  logout: () => void;
};

export const AuthContext = createContext({} as TAuth);
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loginUser, setLoginUser] = useState<TAuthUser>(null);
  const [token, setToken] = useState<string>("");

  const setAuthenticate = useCallback((value: string) => {
    localStorage.setItem("token", value);
    setToken(value);
    const now = new Date().getTime();
    localStorage.setItem("tokenExpiry", now.toString());
  }, []);

  const removeAuthenticate = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiry");
    setToken("");
  }, []);

  const isLoginUser: boolean = useMemo(
    () => !!loginUser?.access_token,
    [loginUser?.access_token]
  );

  const logout = () => {
    setLoginUser(null);
    removeAuthenticate();
  };

  return (
    <AuthContext.Provider
      value={{
        loginUser,
        setLoginUser,
        token,
        setAuthenticate,
        isLoginUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
