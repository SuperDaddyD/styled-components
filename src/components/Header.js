import React from "react";
import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import logo from "../images/logo.svg";
import headerImage from "../images/illustration-mockups.svg";
import { Flex } from "./styles/Flex.styled";

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={logo} alt="svg as image"></Logo>
          <Button>Try It Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p className="lls">
              Huddle re-imagines the way we build communities. You Have a voice,
              but so does your audience. Create connections with yourusers as
              you engage in genuine discussions.
            </p>
            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
            </div>
            <Image src={headerImage}  />
        </Flex>
      </Container>
    </StyledHeader>
  );
}

export default Header;
