import { Container, StyledLink, Title } from "@/styles";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Container>
        <Title>My study List</Title>
        <StyledLink to="/todoList">Todo List</StyledLink>
        <StyledLink to="/memo">Memo</StyledLink>
      </Container>
    </div>
  );
}

export default Home;
