import { Box, Button, MenuItemProps, Stack } from '@chakra-ui/react'
import MenuItem from './MenuItem'

interface MenuLinksProps extends MenuItemProps {
    isOpen: boolean
}

const MenuLinks = ({ isOpen }: MenuLinksProps) => {
  return (
    <Box
        display={{ base: isOpen ? "block" : "none", md: "block"}}
        flexBasis={{ base: "100%", md: "auto"}}
    >
        <Stack
            spacing={8}
            align={"center"}
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}
        >
            <MenuItem href="/"></MenuItem>
            <MenuItem href="https://youtu.be/dQw4w9WgXcQ?si=M1FHtdZDyJ-LzEWw">
                <Button
                    size={"sm"}
                    rounded={"md"}
                    color={"primary"}
                    bg={"secondary_fixed"}
                    _hover={{
                        bg: "secondary"
                    }}
                >
                    Create Account   
                </Button>
            </MenuItem>
        </Stack>
    </Box>
  )
}

export default MenuLinks
