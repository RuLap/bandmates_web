import { User } from '@/types/user'
import { Avatar, Card, CardBody, GridItem, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const UserRow = ({ user }: { user: User }) => {
  return (
    <GridItem w={'100%'}>
      <Card
        padding={'10px'}
        direction={{ base: 'column', sm: 'row' }}
        overflow={'hidden'}
        variant={'outline'}  
      >
        <Avatar src={user.photoUrl} size={'xl'} />

        <Stack>
          <CardBody>
            <Heading size={'md'}>{user.firstName} {user.lastName}</Heading>
            <Text py={'1'}>{user.email}</Text>
          </CardBody>
        </Stack>
      </Card>
    </GridItem>
  )
}

export default UserRow
