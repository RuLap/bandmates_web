import { HambergerMenu } from 'iconic-react'
import { Box } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

interface MenuToggleProps {
  toggle(): void,
  isOpen: boolean
}

const MenuToggle = (props: MenuToggleProps) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={props.toggle}>
      {props.isOpen ? <CloseIcon /> : <HambergerMenu />}
    </Box>
  )
}

export default MenuToggle
