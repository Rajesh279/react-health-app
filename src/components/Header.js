import { StyledHeader } from "./styles/Header.styled";
import { Link } from "react-router-dom";

function Header() {
  return (
    <StyledHeader>
      <nav>
        <h3>DOCAPP</h3>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
        </ul>
      </nav>
    </StyledHeader>
  );
}

export default Header;
