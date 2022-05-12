import { Container, Box, Heading, Image } from "@chakra-ui/react";

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} textAlign="center">
        Hello, I&apos;m a software developer.
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as={"h2"} variant="page-title" fontFamily={"Orbitron"}>
            Loayei AlFarran
          </Heading>
          <p> Transitioning from Web2 =&gt; Web3</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="red"
            borderWidth={2}
            borderStyles="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/loai.png"
            alt="Profile Picture"
          />
        </Box>
      </Box>
    </Container>
  );
};
export default Page;
