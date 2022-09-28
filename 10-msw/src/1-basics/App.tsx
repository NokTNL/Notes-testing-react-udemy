import "./App.css";
import { Options } from "./pages/entry/Options";
import { SummaryForm } from "./pages/summary/SummaryForm";

// Go to `mocks/handlers` for defining the REST handlers
// Go to `mocks/server` & `../setupTests.ts` for setting up the server

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
