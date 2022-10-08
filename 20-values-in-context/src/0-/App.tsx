import "./App.css";
import { OrderEntry } from "./pages/entry/OrderEntry";
import { SummaryForm } from "./pages/summary/SummaryForm";

// Go to pages/entry/test/OrderEntry.test.tsx to see how to mock errors

function App() {
  return (
    <div className="App">
      <h1>Design Your Sundae!</h1>
      <OrderEntry />
      {/* <SummaryForm /> */}
    </div>
  );
}

export default App;
