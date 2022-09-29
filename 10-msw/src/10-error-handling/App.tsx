import "./App.css";
import { Options } from "./pages/entry/Options";
import { OrderEntry } from "./pages/entry/OrderEntry";
import { SummaryForm } from "./pages/summary/SummaryForm";

// Go to pages/entry/test/OrderEntry.test.tsx to see how to mock errors

function App() {
  return (
    <div className="App">
      <OrderEntry />
      {/* <SummaryForm /> */}
    </div>
  );
}

export default App;
