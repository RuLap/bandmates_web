'use client'

import { Box, Button, MenuItemProps, Stack } from '@chakra-ui/react'
import MenuItem from './MenuItem'
import { Gift } from 'iconic-react';
import { useTranslations } from 'next-intl';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

interface MenuLinksProps extends MenuItemProps {
  isOpen: boolean
}

const IconUser = Gift;
const MenuLinks = ({ isOpen }: MenuLinksProps) => {
  const { data: session, status } = useSession();
  console.log(status);
  if(status === "loading") {
    return;
  }

  if(status === "unauthenticated") {
    return UnauthorizedLinks(isOpen);
  }

  return AuthorizedLink(isOpen);
}

const AuthorizedLink = (isOpen: boolean) => {
  const t = useTranslations();

  const handleSignOut = async () => {
    signOut({ redirect: true, callbackUrl: "/" });
  }

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={4}
        align={"center"}
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem href="/"></MenuItem>
        <MenuItem target='_blank' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <Button size={"md"} bgColor={"secondary_fixed"}>
            <IconUser />
          </Button>
        </MenuItem>
        <Button
          onClick={handleSignOut}
          size={"md"}
          rounded={"md"}
          color={"secondary_fixed"}
          borderColor={"secondary_fixed"}
          borderWidth={"2px"}
          bg={"primary"}
          _hover={{
            bg: "secondary"
          }}
        >
          {t("auth.signOut")}
        </Button>
      </Stack>
    </Box>
  )
}

const UnauthorizedLinks = (isOpen: boolean) => {
  const t = useTranslations();
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={4}
        align={"center"}
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem href="/"></MenuItem>
        <MenuItem target='_blank' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <Button size={"md"} bgColor={"secondary_fixed"}>
            <IconUser />
          </Button>
        </MenuItem>
        <MenuItem href="/auth/login">
          <Button
            size={"md"}
            rounded={"md"}
            color={"primary"}
            bg={"secondary_fixed"}
            _hover={{
              bg: "secondary"
            }}
          >
            {t("auth.signIn")}
          </Button>
        </MenuItem>
        <MenuItem href="/auth/register">
          <Button
            size={"md"}
            rounded={"md"}
            color={"secondary_fixed"}
            borderColor={"secondary_fixed"}
            borderWidth={"2px"}
            bg={"primary"}
            _hover={{
              bg: "secondary"
            }}
          >
            {t("auth.signUp")}
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  )
}

export default MenuLinks
