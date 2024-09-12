import { Box, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box
        position={"absolute"}
        bottom={0}
        color={"secondary_fixed"}
        width={"100%"}
    >
        <Text align={"center"}>
            © 2024 BandMates.
        </Text>
    </Box>
  )
}

export default Footer
