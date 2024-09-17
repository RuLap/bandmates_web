import React from 'react'
import { Avatar, Box, Button, chakra, Flex, FormControl, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text } from '@chakra-ui/react'
import { Eye, EyeSlash, Lock, User, Text as TextIcon } from 'iconic-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const IconUser = chakra(User);
const IconLock = chakra(Lock);
const IconEye = chakra(Eye);
const IconEyeSlash = chakra(EyeSlash);
const IconText = chakra(TextIcon)

const RegisterPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { t } = useTranslation();
  const handleShowClick = () => setShowPassword(!showPassword);

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
      <Stack
        flexDir={"column"}
        mb={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Avatar bg={"primary"} />
        <Heading color={"primary"}>{t("auth.signUp")}</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p={"1em"}
              backgroundColor={"primary"}
              boxShadow={"md"}
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents={"none"}
                    children={<IconUser color={"secondary_fixed"} />}
                  />
                  <Input
                    type={"email"}
                    placeholder="Email"
                    borderWidth={"2px"}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents={"none"}
                    children={<IconText color={"secondary_fixed"} />}
                  />
                  <Input
                    placeholder={t("auth.firstName")}
                    borderWidth={"2px"}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents={"none"}
                    children={<IconText color={"secondary_fixed"} />}
                  />
                  <Input
                    placeholder={t("auth.lastName")}
                    borderWidth={"2px"}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents={"none"}
                    color={"secondary_fixed"}
                    children={<IconLock color={"secondary_fixed"} />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder={t("auth.password")}
                    borderWidth={"2px"}
                  />
                  <InputRightElement>
                    <Button
                      h={"1.75rem"}
                      size={"sm"}
                      leftIcon={showPassword ? <IconEye /> : <IconEyeSlash />}
                      color={"secondary_fixed"}
                      bgColor={"transparent"}
                      onClick={handleShowClick}
                      _hover={{}}
                      _active={{}}
                    >
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents={"none"}
                    color={"secondary_fixed"}
                    children={<IconLock color={"secondary_fixed"} />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder={t("auth.confirmPassword")}
                    borderWidth={"2px"}
                  />
                </InputGroup>
              </FormControl>
              <Button
                type={"submit"}
                variant={"solid"}
                color={"primary"}
                bgColor={"secondary_fixed"}
              >
                {t("auth.register")}
              </Button>
            </Stack>
          </form>
        </Box>
        <Box textColor={"primary"}>
          {t("auth.alreadyHaveAccount")}{" "}
          <Link to={"/login"}>
            {t("auth.login")}
          </Link>
        </Box>
      </Stack>
    </Flex>
  )
}

export default RegisterPage
