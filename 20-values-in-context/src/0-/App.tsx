import "./App.css";
import { EntryPage } from "./pages/entry/EntryPage";
import { SummaryForm } from "./pages/summary/SummaryForm";

// Go to pages/entry/test/OrderEntry.test.tsx to see how to mock errors

function App() {
  return (
    <div className="App">
      <EntryPage />
      {/* <SummaryForm /> */}
    </div>
  );
}

export default App;
