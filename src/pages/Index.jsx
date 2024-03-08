import React from "react";
import { ChakraProvider, Box, VStack, Grid, theme, Text, Image, Heading, Input, Button, Icon, HStack, Stack, Flex, Spacer, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSearch, FaShoppingCart, FaUserCircle, FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <ChakraProvider theme={theme}>
      <Flex justifyContent="space-between" alignItems="center" px={4} py={3}>
        <Icon as={FaUserCircle} w={6} h={6} />
        <IconButton aria-label="Toggle dark mode" icon={colorMode === "dark" ? <FaSun /> : <span />} onClick={toggleColorMode} size="lg" />
      </Flex>
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

            <HStack spacing={4} w="full" p={4} overflowX="auto">
              {[1, 2, 3].map((item) => (
                <Box key={item} minW="70vw" boxShadow="md" p={4} borderRadius="lg">
                  <Image src={`https://via.placeholder.com/150?text=Product+${item}`} alt={`Product ${item}`} />
                  <Text fontWeight="bold">$19.99</Text>
                </Box>
              ))}
            </HStack>

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
