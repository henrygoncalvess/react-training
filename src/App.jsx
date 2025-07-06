import Container from "./components/Container";
import Counter from "./components/Counter";
import PasswordSection from "./components/PasswordSection/PasswordSection";

function App() {
  return (
    <>
      <Container title="State" desc="useState()">
        <Counter />
      </Container>
      <Container title="Lifting State Up" desc="onChange() event">
        <PasswordSection />
      </Container>
    </>
  );
}

export default App;
