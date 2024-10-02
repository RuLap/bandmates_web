'use client'

import UserRow from '@/components/User/UserRow';
import { User } from '@/types/user';
import { Card, CardBody, CardHeader, Heading, Image, Stack, StackDivider } from '@chakra-ui/react';
import { Box } from 'iconic-react';
import React, { useState } from 'react'

const UsersPage = () => {
  const [users, setUsers] = useState();
  const getUsers = async () => {
    try {
      const res = await fetch("/api/users", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      });

      var data = await res.json();      
      const users1 = data.data.map((user: User) => <UserRow key={user.id} user={user} />);
      setUsers(users1);
    }
    catch(error) {
      console.log(error);
    }
  }
  getUsers();
  return (
    <Card
      bgColor={"#B2B2B2"}
      paddingTop={"80px"}
      marginLeft={"25%"}
      marginRight={"25%"}
    >
      <CardHeader>
        <Heading size={'md'}>Пользователи</Heading>
      </CardHeader>
      <CardBody>
        <Stack
          divider={<StackDivider />}
          spacing={'4'}
          marginLeft={"25%"}
          marginRight={"25%"}
          paddingTop={"80px"}
        >
          {users}
        </Stack>
      </CardBody>
    </Card>
  );
}

export default UsersPage
