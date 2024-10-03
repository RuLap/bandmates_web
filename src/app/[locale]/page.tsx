'use client'

import { Box, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import {redirect} from 'next/navigation';

export default function Home() {
  const { data: session, status } = useSession();
  if(status === 'authenticated') {
    redirect('/home');
  }
  else {
    return <Box h={'calc(100vh)'} w={'100%'} bgColor={'secondary'} alignContent={'center'}>
      <Text
        align={'center'}
        color={"secondary_fixed"}
        fontSize={24}
        fontWeight={600}
      >
        The full functionality of BandMates web version is currently unavailable.
      </Text>
    </Box>
  }
}
