import { User } from "@supabase/supabase-js";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import supabase from "../configs/supabase";

const AuthContext = createContext({} as User | null | undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState({} as User | null | undefined);

  async function getUser() {
    const { data, error } = await supabase.auth.getUser();
    setUser(data.user);
  }

  console.log(user);

  useEffect(() => {
    getUser();
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useUser = () => {
  return React.useContext(AuthContext);
};
