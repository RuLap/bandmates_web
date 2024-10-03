import React from 'react'
import { Box, Text } from "@chakra-ui/react";

const HomePage = () => {
  return <Box h={'calc(100vh)'} w={'100%'} bgColor={'seondary'} alignContent={'center'}>
      <Text
        align={'center'}
        color={'secondary_fixed'}
        fontSize={24}
        fontWeight={600}
      >
        The full functionality of BandMates web version is currently unavailable.
      </Text>
    </Box>
}

export default HomePage
