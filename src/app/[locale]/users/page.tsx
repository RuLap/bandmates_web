'use client'

import UserRow from '@/components/User/UserRow';
import { User } from '@/types/user';
import { Box, chakra, Grid, GridItem, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { SearchNormal1 } from 'iconic-react';

const UsersPage = () => {
  const IconSearch = chakra(SearchNormal1);
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
    <Box h={'calc(100vh)'} w={'100%'} bgColor={'secondary'} paddingTop={'100px'} paddingRight={'20px'}>
      <Grid
        templateAreas={`"nav search"
                        "nav main"`}
        gridTemplateRows={'50px 1fr'}
        gridTemplateColumns={'300px 1fr'}
      >
        <GridItem area={'nav'} paddingLeft={'20px'}>
          <Box bgColor={'primary'} w={'100%'} h={'100%'}>
            <Text paddingTop={'10px'} color={'secondary_fixed'} align={'center'}>
              Фильтры
            </Text>
          </Box>
        </GridItem>
        <GridItem area={'search'} paddingLeft={'20px'}>
        <InputGroup>
          <InputLeftElement
            pointerEvents={"none"}
            children={<IconSearch color={"primary"} />}
          />
          <Input
            borderColor={'primary'}
            type={"text"}
            placeholder="Поиск..."
            _placeholder={{ color: 'primary' }}
            borderWidth={"2px"}
          />
        </InputGroup>
        </GridItem>
        <GridItem area={'main'}>
          <Grid marginLeft={'20px'} templateColumns={'repeat(4, 1fr)'} gap={4}>
            {users}
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default UsersPage
