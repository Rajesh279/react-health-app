import { Link } from "react-router-dom";
import { useAppContext } from "../../Context/appContext";
import { StyledCard } from "./card.styled";

export default function Card({ item: { title, sub, des, image } }) {
  const { getSpecializationTitle } = useAppContext();

  return (
    <StyledCard>
      <Link to="/doctors" onClick={()=>getSpecializationTitle(title)}>
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
