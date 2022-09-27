import "./App.css";
import { SummaryForm } from "./components/SummaryForm";

// Go to `mocks/handlers` for defining the REST handlers
// Go to `mocks/server` & `../setupTests.ts` for setting up the server

function App() {
  return (
    <div className="App">
      <SummaryForm />
    </div>
  );
}

export default App;
