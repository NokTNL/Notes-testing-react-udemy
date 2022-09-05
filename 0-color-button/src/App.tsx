import React, { useState } from "react";
import "./App.css";

function App() {
  const [isButtonRed, setIsButtonRed] = useState(true);
  const buttonBgStyleText = isButtonRed ? "red" : "blue";

  return (
    <div className="App">
      <button
        // !!! It may NOT be a good idea to test styling using Jest, because they are not FUNCTIONAL but more AESTHETIC
        // style that needs to be tested has to be either inline or use a css transformer for jest
        // This is because jest will ignore CSS modules by default
        style={{ backgroundColor: buttonBgStyleText }}
        onClick={() => {
          setIsButtonRed((prev) => !prev);
        }}
      >
        Change to {isButtonRed ? "Blue" : "Red"}!
      </button>
      <input type="checkbox" />
    </div>
  );
}

export default App;
