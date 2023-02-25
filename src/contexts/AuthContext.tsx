import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import supabase from "../configs/supabase";

export const AuthContext = () => {
  const [user, setUser] = useState();

  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }
  async function signInWithDiscord() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "discord",
    });
  }

  return <div>AuthContext</div>;
};
