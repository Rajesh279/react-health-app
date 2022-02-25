import { Link } from "react-router-dom";
import { StyledCard } from "./card.styled";

export default function Card({ item: { id, title, sub, des, image } }) {
  return (
    <StyledCard>
      <Link to="/category">
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <img src={`./images/${image}`} alt="" />
          <p id="sub-title">{sub}</p>
          <p className="des">{des}</p>
        </div>
      </Link>
    </StyledCard>
  );
}
