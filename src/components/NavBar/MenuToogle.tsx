import { HambergerMenu, CloseCircle } from 'iconic-react'
import { Box } from '@chakra-ui/react'

interface MenuToggleProps {
  toggle(): void,
  isOpen: boolean
}

const MenuToggle = (props: MenuToggleProps) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={props.toggle}>
      {props.isOpen ? <CloseCircle /> : <HambergerMenu />}
    </Box>
  )
}

export default MenuToggle
