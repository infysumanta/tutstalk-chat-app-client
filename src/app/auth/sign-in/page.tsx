import SignInComponent from "@/components/auth/sign-in-component";
import { VStack } from "@chakra-ui/react";
import React from "react";

type Props = {};

const SignInPage = (props: Props) => {
  return (
    <VStack spacing="10px">
      <SignInComponent />
    </VStack>
  );
};

export default SignInPage;
