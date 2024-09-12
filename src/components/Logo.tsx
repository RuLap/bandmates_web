import { Text, Box, BoxProps } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Logo = (props: BoxProps) => {
  return (
    <Box {...props} ml={10}>
      <Link to={"/"}>
        <Text fontSize={"30"} fontWeight={"700"}>
            BandMates
        </Text>
      </Link>
    </Box>
  )
}

export default Logo
