"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";

interface User {
  name: string;
  email: string;
}

export const UserContext = createContext<{
  user: {};
  setUser: React.Dispatch<React.SetStateAction<User>>;
  signIn: (email: string, password: string) => void;
}>({
  user: {},
  setUser: () => {},
  signIn: (email: string, password: string) => {},
});

export function UserProvider({ children }: any) {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "vedant",
    email: "vedant@gmail.com",
  });

  const signIn = async (email: string, password: string) => {
    await axios
      .post("/api/user/signin", {
        email,
        password,
      })
      .then(async (response: any) => {
        const res = await response.json();
        setUser(res.data);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <UserContext.Provider value={{ user, setUser, signIn }}>
      {children}
    </UserContext.Provider>
  );
}
