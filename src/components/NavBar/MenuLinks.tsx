import { Box, Button, chakra, MenuItemProps, Stack } from '@chakra-ui/react'
import MenuItem from './MenuItem'
import { Gift } from 'iconic-react';

interface MenuLinksProps extends MenuItemProps {
  isOpen: boolean
}

const IconUser = chakra(Gift);

const MenuLinks = ({ isOpen }: MenuLinksProps) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align={"center"}
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem href="/"></MenuItem>
        <MenuItem target='_blank' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <Button size={"sm"}>
            <IconUser />
          </Button>
        </MenuItem>
        <MenuItem href="/login">
          <Button
            size={"sm"}
            rounded={"md"}
            color={"primary"}
            bg={"secondary_fixed"}
            _hover={{
              bg: "secondary"
            }}
          >
            Sign In
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  )
}

export default MenuLinks
