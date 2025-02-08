import Step from "./Step";
import StepMessage from "./StepMessage";

function App() {
  return (
    <div>
      <Step />
      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>✌️</p>
      </StepMessage>

      <StepMessage step={2}>
        <p>Read children prop</p>
        <p>😎</p>
      </StepMessage>
    </div>
  );
}

export default App;
