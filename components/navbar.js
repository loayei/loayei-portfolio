import Logo from "./logo";
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const LinkItem = ({ href, children, path }) => {
  const isActive = path === href;
  const notActiveColor = useColorModeValue("gray200", "whiteAlpha900");
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={isActive ? "grassTeal" : undefined}
        color={isActive ? "#202023" : notActiveColor}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size={"sm"} letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "100%", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/projects" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/experience" path={path}>
            Experience
          </LinkItem>
          <LinkItem href="/education" path={path}>
            Education
          </LinkItem>
          <LinkItem href="www.github.com/loayei" path={path}>
            Github
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                  <NextLink href="/" passHref>
                      <MenuItem as={Link}>Home</MenuItem>
                  </NextLink>
                  <NextLink href="/projects" passHref>
                      <MenuItem as={Link}>Projects</MenuItem>
                  </NextLink>
                  <NextLink href="/experience" passHref>
                      <MenuItem as={Link}>Experience</MenuItem>
                  </NextLink>
                  <NextLink href="/education" passHref>
                      <MenuItem as={Link}>Education</MenuItem>
                  </NextLink>
                  <NextLink href="www.github.com/loayei" passHref>
                      <MenuItem as={Link}>Github</MenuItem>
                  </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
