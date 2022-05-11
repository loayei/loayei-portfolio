import { Container, Box, Heading } from "@chakra-ui/react";

const Home = () => {
  return (
    <Container>
      <Box 
      borderRadius="lg" 
      bg="red" 
      p={3} 
      mb={6} 
      textAlign="center"
      css={{ backdropFilter: "blur(10px)" }}
      >
        Hello, I&apos;m a software developer.
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Loai AlFarran
          </Heading>
          <p> Transitioning from Web2 =&gt; Web3</p>
        </Box>
      </Box>
    </Container>
  );
};
export default Home;
