import { Flex, Text } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <Flex
      w={"100%"}
      align={"center"}
      alignContent={"center"}
      justifyContent={"center"}
      color={"secondary_fixed"}
      bgColor={"secondary"}
      height={"100vh"}
    >
      <Text
        align={"center"}
        fontSize={"20"}
      >
        Web version of BandMates App is currently unavailable. 
      </Text>
    </Flex>
  )
}

export default HomePage
