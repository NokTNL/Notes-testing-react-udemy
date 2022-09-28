import "./App.css";
import { Options } from "./pages/entry/Options";
import { SummaryForm } from "./pages/summary/SummaryForm";

// Go to pages/entry/Options.tsx for our server call
// Go to Opages/entry/test/Options.test.tsx for how we can test it

function App() {
  return (
    <div className="App">
      <h3>Choose Scoops</h3>
      <Options optionType="scoops" />
      <h3>Choose Toppings</h3>
      <Options optionType="toppings" />
      {/* <SummaryForm /> */}
    </div>
  );
}

export default App;
