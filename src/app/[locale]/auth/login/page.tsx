'use client'

import { Avatar, Box, Button, chakra, Flex, FormControl, FormHelperText, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text } from '@chakra-ui/react'
import { Eye, EyeSlash, Lock, User } from 'iconic-react';
import React, { FormEventHandler, useState } from 'react';
import { useTranslations } from 'next-intl';
import { signIn } from 'next-auth/react';
import { Link } from '@chakra-ui/next-js';

const IconUser = chakra(User);
const IconLock = chakra(Lock);
const IconEye = chakra(Eye);
const IconEyeSlash = chakra(EyeSlash);

export default function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const t = useTranslations();
  const handleShowClick = () => setShowPassword(!showPassword);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    try {
      const res = await signIn("credentials", { username: login, password: password, redirect: true, callbackUrl: "/home" });
      if(res?.error) {
        console.log(res.error);
      }
    }
    catch (err) {
      console.log(err);
    }
  }

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
        <Heading color={"primary"}>{t("auth.signIn")}</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit}>
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
                    onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setLogin(e.target.value)}
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
                    onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
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
                  <Link href={"#"}>{t("auth.forgotPassword")}</Link>
                </FormHelperText>
              </FormControl>
              <Button
                type={"submit"}
                variant={"solid"}
                color={"primary"}
                bgColor={"secondary_fixed"}
              >
                {t("auth.login")}
              </Button>
            </Stack>
          </form>
        </Box>
        <Box textColor={"primary"}>
          {t("auth.dontHaveAccount")}{" "}
          <Link href={"register"}>
            {t("auth.register")}
          </Link>
        </Box>
      </Stack>
    </Flex>
  )
}
