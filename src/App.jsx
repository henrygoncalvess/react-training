import Container from "./components/Container";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Container title="Counter" desc="useState()">
        <Counter />
      </Container>
      <Container title="Other" desc="Other"></Container>
    </>
  );
}

export default App;
