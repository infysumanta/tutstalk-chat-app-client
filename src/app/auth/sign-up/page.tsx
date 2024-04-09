import SignUpComponent from "@/components/auth/sign-up-component";
import { VStack } from "@chakra-ui/react";
import React from "react";

type Props = {};

const SignUpPage = (props: Props) => {
  return (
    <VStack spacing="5px">
      <SignUpComponent />
    </VStack>
  );
};

export default SignUpPage;
