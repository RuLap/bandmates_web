import { Box, Button, chakra, MenuItemProps, Stack } from '@chakra-ui/react'
import MenuItem from './MenuItem'
import { Gift } from 'iconic-react';
import { useTranslation } from 'react-i18next';

interface MenuLinksProps extends MenuItemProps {
  isOpen: boolean
}

const IconUser = chakra(Gift);
const MenuLinks = ({ isOpen }: MenuLinksProps) => {
  const { t } = useTranslation();
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
        <MenuItem href="/login">
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
        <MenuItem href="/register">
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
