import Card from "./Card";
import { Container } from "./styles/Container.styled";
import { content } from "../Content";

function Home() {
  return (
    <Container>
      {content.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </Container>
  );
}

export default Home;
