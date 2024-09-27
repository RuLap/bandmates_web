'use client'

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from '@chakra-ui/react';
import { ReactNode } from "react";
import customTheme from "@/utils/theme";

export interface AuthProviderProps {
  children: ReactNode;
  session?: Session | null
}

export function Providers({ children, session = null } : Readonly<AuthProviderProps>) {
  return <SessionProvider session={session}>    
    <ChakraProvider theme={customTheme}>
      {children}
    </ChakraProvider>
  </SessionProvider>
}