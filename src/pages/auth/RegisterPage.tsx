import React from 'react'
import { Avatar, Box, Button, chakra, Flex, FormControl, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text } from '@chakra-ui/react'
import { Eye, EyeSlash, Lock, User, Text as TextIcon } from 'iconic-react';
import { Link } from 'react-router-dom';

const IconUser = chakra(User);
const IconLock = chakra(Lock);
const IconEye = chakra(Eye);
const IconEyeSlash = chakra(EyeSlash);
const IconText = chakra(TextIcon)

const RegisterPage = () => {
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
        <Heading color={"primary"}>Sign Up</Heading>
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
                    type={"email"}
                    placeholder="First Name"
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
                    type={"email"}
                    placeholder="LastName"
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
                    placeholder="Confirm password"
                    borderWidth={"2px"}
                  />
                </InputGroup>
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
          Already have account?{" "}
          <Link to={"/login"}>
            Sign In
          </Link>
        </Box>
      </Stack>
    </Flex>
  )
}

export default RegisterPage
