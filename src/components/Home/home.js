import Card from "../Card/card";
import { Container } from "../styles/Container.styled";
import { content } from "../../Content";
import { useAppContext } from "../../Context/appContext";
import { useEffect } from "react";

function Home() {
  const { specialization } = useAppContext();
  return (
    <Container>
      {specialization.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </Container>
  );
}

export default Home;
