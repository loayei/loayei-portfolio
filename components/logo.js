import Link from "next/link"
import Image from "next/image"
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 22px 10px 0px 0px;
  img{
      transition: 400ms ease;
  }

  &:hover img {
    transform: scaleX(-1);
  }
`

const Logo = () => {
  const ghost = `/images/ghost${useColorModeValue("", "-dark")}.png`;
  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Image src={ghost} width="40" height="40" alt="logo" />
          <Text
            color={useColorModeValue('gray.800", "whiteAlpha.900')}
            fontFamily="Orbitron"
            fontWeight="bold"
            ml={4}
          >
            Loayei AlFarran
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
};

export default Logo;
