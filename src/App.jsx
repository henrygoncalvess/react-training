import Container from "./components/Container";
import Counter from "./components/Counter";
import PasswordInput from "./components/PasswordInput";

function App() {
  return (
    <>
      <Container title="Counter" desc="useState()">
        <Counter />
      </Container>
      <Container title="Inputs" desc="onChange() event">
        {/* <PasswordInput /> */}
      </Container>
    </>
  );
}

export default App;
