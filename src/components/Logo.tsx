import { Link } from '@chakra-ui/next-js'
import { Text, Box, BoxProps } from '@chakra-ui/react'

const Logo = (props: BoxProps) => {
  return (
    <Box {...props} ml={10}>
      <Link href={"/"} style={{ textDecoration: 'none' }}>
        <Text fontSize={"30"} fontWeight={"700"}>
          BandMates
        </Text>
      </Link>
    </Box>
  )
}

export default Logo
