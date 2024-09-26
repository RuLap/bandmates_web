'use client'

import { Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  if(status === 'authenticated') {
    <Text paddingTop={"100px"}>Hello, {session.user.id}</Text>
  }

  return (
    <Text paddingTop={"100px"}>Hello</Text>
  );
}
