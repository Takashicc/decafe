import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FormControl, Flex, Image, Box } from "@chakra-ui/react";
import { Input } from "@/components/molecules/Input";
import { Button } from "@/components/atoms/Button";
import * as schema from "@/api/schema";
import Cookies from "js-cookie";
import api from "@/lib/axios_settings";
import { FiLogIn } from "react-icons/fi";
import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { showMessage, isAxiosError } from "@/utils";

interface LoginAreaForm {
  email: string;
  password: string;
}

export const LoginArea: React.FC = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginAreaForm>();

  const [message, setMessage] = useState<string>();

  function onSubmit(formValues: LoginAreaForm) {
    return api
      .post<schema.Auth>("/api/v1/owners/login", formValues)
      .then((res) => {
        const response = res.data;

        if (response.access_token) {
          Cookies.set("access_token", response.access_token);
          router.push("/");
        }
      })
      .catch((e) => {
        if (isAxiosError<schema.Auth>(e)) {
          setMessage(e.response?.data.message);
        }
      });
  }

  return (
    <>
      <Flex justify="center">
        <NextLink href="/">
          <Box boxSize="sm">
            <Image src="/images/decafeowner.png" alt="decafe owner logo" />
          </Box>
        </NextLink>
      </Flex>
      <Flex direction="column">
        <form onSubmit={handleSubmit(onSubmit)}>
          {showMessage(message)}
          <FormControl isInvalid={errors.email !== undefined}>
            <Input
              type="email"
              id="email"
              label="Email Address"
              placeHolder="Enter your email address"
              register={register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Email is invalid format",
                },
              })}
            />
            {showMessage(errors.email?.message)}
          </FormControl>
          <FormControl isInvalid={errors.password !== undefined}>
            <Input
              type="password"
              id="password"
              label="Password"
              placeHolder="Enter your password"
              register={register("password", {
                required: "Password is required",
              })}
            />
            {showMessage(errors.password?.message)}
          </FormControl>
          <Flex justifyContent="end">
            <Button
              text="Login"
              leftIcon={<FiLogIn />}
              isLoading={isSubmitting}
              {...{ mt: 2 }}
            />
          </Flex>
        </form>
        <Flex justifyContent="center" mt="20px">
          Don't have an account? click
          <NextLink href="/owners/signup">
            <ChakraLink color="teal.500" mx={2}>
              HERE
            </ChakraLink>
          </NextLink>
          to create one!
        </Flex>
      </Flex>
    </>
  );
};
