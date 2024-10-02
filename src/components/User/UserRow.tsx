import { User } from '@/types/user'
import { Avatar, Box, Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const UserRow = ({ user }: { user: User }) => {
  return (
    <>
    <Box
      alignContent={"center"}>
      <Heading size={"xs"}>
        {user.lastName} {user.firstName}
      </Heading>
      <Text pt={'2'} fontSize={'sm'}>
        {user.email}
      </Text>
    </Box>
    </>
  )
}

export default UserRow
