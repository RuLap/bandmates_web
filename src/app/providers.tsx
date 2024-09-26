'use client'

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

export interface AuthProviderProps {
  children: JSX.Element;
  session?: Session | null
}

export function AuthProvider({ children, session = null } : Readonly<AuthProviderProps>) {
  return <SessionProvider session={session}>
    {children}
  </SessionProvider>
}