import { useTranslation } from 'react-i18next';
import { Flex, Text } from '@chakra-ui/react'

const HomePage = () => {
  const { t } = useTranslation();
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
        {t('main.webVersionIsUnavailable')}
      </Text>
    </Flex>
  )
}

export default HomePage;