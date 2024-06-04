import { Box, Container, Flex, Heading, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">Financial Times</Heading>
        <Flex>
          {["Home", "World", "Business", "Markets", "Opinion", "Tech"].map((section) => (
            <Link key={section} href="#" mx={2} _hover={{ textDecoration: "underline" }}>
              {section}
            </Link>
          ))}
        </Flex>
      </Flex>

      {/* Headline Section */}
      <Box bg="gray.100" p={8} my={4}>
        <Heading as="h2" size="xl" mb={4}>Latest News Headline</Heading>
        <Text fontSize="lg">This is a brief description of the latest news headline. It provides a summary of the most important news at the moment.</Text>
      </Box>

      {/* News Grid */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} my={4}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Box key={index} bg="white" p={4} boxShadow="md" borderRadius="md">
            <Heading as="h3" size="md" mb={2}>News Article {index + 1}</Heading>
            <Text>This is a brief summary of the news article. It provides an overview of the content and key points.</Text>
          </Box>
        ))}
      </SimpleGrid>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>&copy; 2023 Financial Times</Text>
          <Flex>
            {["Contact", "Privacy Policy", "Terms of Service"].map((link) => (
              <Link key={link} href="#" mx={2} _hover={{ textDecoration: "underline" }}>
                {link}
              </Link>
            ))}
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;