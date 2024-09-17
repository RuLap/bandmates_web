import { Flex } from '@chakra-ui/react'
import React from 'react'

const NavBarContainer = ({ children }: { children: React.ReactNode }, { ...props }) => {
  return (
    <Flex
      as={"nav"}
      position={"fixed"}
      align={"center"}
      justify={"space-between"}
      wrap={"wrap"}
      w={"100%"}
      p={4}
      bg={"primary"}
      color={"secondary_fixed"}
      {...props}
    >
      {children}
    </Flex>
  )
}

export default NavBarContainer