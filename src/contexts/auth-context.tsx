import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { User } from "../models/user";
import { useFetch } from "../hooks/useFetch";

type AuthContextData = {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  signIn: (data: any) => Promise<void>;
  signUp: (user: User) => Promise<boolean>;
  error: string | undefined | null;
  fetching: boolean;
  logout: () => void;
  user: User | null;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null);
  const { request, error, fetching } = useFetch<any>();
  const [user, setUser] = useState<User | null>(null);

  const signIn = async (data: any) => {
    const json = await request("/api/v1/sign-in", "POST", data);
    if (json.token) {
      localStorage.setItem("token", json.token);
      setToken(json.token);
    }
  };

  const signUp = async (user: User) => {
    const json = await request("/api/v1/sign-up", "POST", user);
    if (json.user.id) {
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const getUser = useCallback(async () => {
    if (user) return;
    const json = await request("/api/v1/user/me");
    if (json.user) {
      setUser(json.user);
    }
  }, [request, user]);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (localStorage.getItem("token")) {
      getUser();
    }
  }, [getUser]);

  const authContext = {
    token,
    setToken,
    signIn,
    signUp,
    error,
    fetching,
    logout,
    user,
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};
