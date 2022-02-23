import { Container } from "./styles/Container.styled";
import { StyledFooter } from "./styles/Footer.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <ul>
          <li>About Us</li>
          <li>What We Do</li>
          <li>FAQ</li>
        </ul>

        <ul>
          <li>Career</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
        <p>&copy; 2022 DOCApp. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
}
