'use client'

import UserRow from '@/components/User/UserRow';
import { User } from '@/types/user';
import { Grid, GridItem } from '@chakra-ui/react';
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
      const users1 = data.data.map((user: User) => 
        <GridItem id={user.id}>
          <UserRow key={user.id} user={user} />
        </GridItem>
      );
      setUsers(users1);
    }
    catch(error) {
      console.log(error);
    }
  }
  getUsers();
  return (
    <Grid paddingTop={'80px'} marginLeft={'20%'} marginRight={'20%'} templateColumns={'repeat(3, 1fr)'} gap={6}>
      {users}
    </Grid>
  );
}

export default UsersPage
