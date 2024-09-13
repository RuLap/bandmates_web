import { Avatar, Box, Button, chakra, Flex, FormControl, FormHelperText, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text } from '@chakra-ui/react'
import { Eye, EyeSlash, Lock, User } from 'iconic-react';
import React from 'react';
import { Link } from 'react-router-dom';

const IconUser = chakra(User);
const IconLock = chakra(Lock);
const IconEye = chakra(Eye);
const IconEyeSlash = chakra(EyeSlash);

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

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
        <Heading color={"primary"}>Sign In</Heading>
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
                    color={"secondary_fixed"}
                    children={<IconLock color={"secondary_fixed"} />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
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
                <FormHelperText color={"secondary_fixed"} textAlign={"right"}>
                  <Link to={"#"}>Forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                type={"submit"}
                variant={"solid"}
                color={"primary"}
                bgColor={"secondary"}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
        <Box textColor={"primary"}>
          Don't have account?{" "}
          <Link to={"/register"}>
            Sign Up
          </Link>
        </Box>
      </Stack>
    </Flex>
  )
}

export default LoginPage
