import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function AuthLayout({ children }: Props) {
  return (
    <div>
      <Container maxW="xl" centerContent>
        <Box
          justifyContent="center"
          p={3}
          bg="white"
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Text fontSize="4xl" fontFamily="Work sans">
            Tutstalk Chat
          </Text>
        </Box>
        <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
          {children}
        </Box>
      </Container>
    </div>
  );
}

export default AuthLayout;
