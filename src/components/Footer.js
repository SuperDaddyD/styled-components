import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";

import React from "react";
import { StyledFooter } from "./styles/Footer.styles";
import  SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <StyledFooter>
    <Container>
      <img src="../images/logo_white.svg" alt="asdf" />
      <Flex>
        <ul>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
            distinctio cumque dolorem dolores blanditiis nulla nostrum ipsum?
            Iure illum facilis inventore, itaque vitae aliquid molestias! Quae,
            laboriosam? Veritatis, corrupti laboriosam.
          </li>
          <li>+1-543-123-4567</li>
          <li>example@huddle.com</li>
        </ul>
        <ul>
          <li>About Us</li>
          <li>What We Do</li>
          <li>FAQ</li>
        </ul>
        <ul>
          <li>Carrer</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
        <SocialIcons/>
      </Flex>
      <p>&copy;2021 Huddle.All Rights Reserved</p>
    </Container>
    </StyledFooter>
  );
}

export default Footer;
