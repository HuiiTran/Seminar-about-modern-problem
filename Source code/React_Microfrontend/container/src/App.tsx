import {
  Box,
  Center,
  Flex,
  Heading,
  Spinner,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";

const AppOne = React.lazy(() => import("app1/AppOne"));
const AppTwo = React.lazy(() => import("app2/AppTwo"));
var version = process.env.BUILD_DATE;

const App = () => (
  <>
    <Center
      height="100vh"
      width="100%"
      backgroundColor="#1B1A29"
      margin="0"
      p="0"
      flexDirection="column"
    >
      <Flex
        border="1px solid #151421"
        borderRadius="1rem"
        height="150vh"
        width="100%"
        justifyContent="flex-start"
        alignItems="center"
        flexDirection="column"
        backgroundColor="#6F60EA"
      >
        <Heading color="#fff">CONTAINER</Heading>
        <Flex
          width="100%"
          margin="1rem"
          direction="row"
          justifyContent="flex-start"
        >
          <React.Suspense fallback={<Spinner size="xl" />}>
            <Box
              p="12rem"
              mr="5rem"
              ml="1rem"
              w="70rem"
              h="35rem"
              border="1px solid #aeaeae"
              borderRadius="1rem"
              backgroundColor="#fff"
            >
              <Heading color="#6F60EA" mb="1rem" ml="10rem">
                MovieBox - APP-1
              </Heading>
              <AppOne></AppOne>
            </Box>
          </React.Suspense>
          <React.Suspense fallback={<Spinner size="xl" />}>
            <Box
              p="2rem"
              border="1px solid #aeaeae"
              borderRadius="1rem"
              backgroundColor="#fff"
            >
              <Heading color="#6F60EA" mb="1rem">
                List - APP-2
              </Heading>
              <AppTwo />
            </Box>
          </React.Suspense>
        </Flex>
      </Flex>
      {/* <Link
        marginTop="5rem"
        href="https://github.com/HuiiTran/Seminar-about-modern-problem"
        target="_blank"
      >
        <Image src="./git.png" height="45px" width="45px" />
      </Link> */}
    </Center>
  </>
);

export default App;
