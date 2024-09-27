'use client'

import { Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import {redirect} from 'next/navigation';

export default function Home() {
  const { data: session, status } = useSession();
  if(status === 'authenticated') {
    redirect('/home');
  }
  else {
    return <Text paddingTop={"200px"}>Hello</Text>
  }

  return (
    <Text paddingTop={"100px"}>Hello</Text>
  );
}
