import { StyledHeader } from "./header.styled";
import { Link } from "react-router-dom";

function Header() {
  return (
    <StyledHeader>
      <nav>
        <Link to="/">
          <h3>DOCAPP</h3>
        </Link>
        <ul>
          <Link to="/">
            <span>Home</span>
          </Link>
        </ul>
      </nav>
    </StyledHeader>
  );
}

export default Header;
