import React from "react";
import { ChakraProvider, Box, VStack, Grid, theme, Text, Image, Heading, Input, Button, Icon, HStack, Stack, Flex, Spacer, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSearch, FaShoppingCart, FaUserCircle, FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <ChakraProvider theme={theme}>
      <IconButton aria-label="Toggle dark mode" icon={colorMode === "dark" ? <FaSun /> : <FaMoon />} onClick={toggleColorMode} position="absolute" top="1rem" right="1rem" />
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Heading as="h1" size="2xl" mb={8}>
              WILSON STORE
            </Heading>

            <Box w="full" p={4} bgColor="gray.100" borderRadius="lg">
              <HStack>
                <Input placeholder="Search for products..." />
                <Button colorScheme="blue" leftIcon={<FaSearch />}>
                  Search
                </Button>
              </HStack>
            </Box>

            <Flex direction={{ base: "column", md: "row" }} w="full" p={4}>
              <Stack spacing={4} w="full" maxW="sm" align="center">
                <Image borderRadius="lg" src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzdG9yZSUyMHByb2R1Y3RzfGVufDB8fHx8MTcwOTg5NjYzMnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Featured product" />
                <Text>Top Deals on the Best Products!</Text>
                <Button colorScheme="green" size="lg">
                  Shop Now
                </Button>
              </Stack>
              <Spacer />
              <Stack spacing={4} w="full" maxW="sm" align="center">
                <Image borderRadius="lg" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzdG9yZSUyMGZhc2hpb258ZW58MHx8fHwxNzA5ODk2NjMyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Fashion category" />
                <Text>Latest in Fashion and Style</Text>
                <Button colorScheme="pink" size="lg">
                  Get the Look
                </Button>
              </Stack>
            </Flex>

            <HStack spacing={12} w="full" justify="center" p={4}>
              <Icon as={FaShoppingCart} w={8} h={8} />
              <Icon as={FaUserCircle} w={8} h={8} />
            </HStack>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
