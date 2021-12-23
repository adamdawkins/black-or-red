import { useState } from "react";
import "./index.css";

function App() {
  const [chosenColour, setChosenColour] = useState(null);
  const [theColour, setTheColour] = useState(null);

  const deal = (event) => {
    event.preventDefault();

    const random = Math.random() * 10;
    if (random <= 5) {
      setTheColour("red");
    } else {
      setTheColour("black");
    }
  };
  return (
    <div className="App">
      <h1>Choose a colour :)</h1>
      <button
        className="text-red-500 mr-5"
        onClick={() => setChosenColour("red")}
      >
        Red
      </button>
      <button onClick={() => setChosenColour("black")}>Black</button>
      {chosenColour && (
        <>
          <p>
            You have chosen{" "}
            <span className={`text-${chosenColour}-500`}>{chosenColour}</span>
          </p>

          <button
            onClick={(event) => deal(event)}
            disabled={theColour}
            className={["border border-black p-3 font-bold text-xl"]}
          >
            Deal!
          </button>

          {theColour && (
            <>
              <p className="text-xl">
                The card is{" "}
                <span className={`text-${theColour}-500`}>{theColour}</span>
              </p>
              {theColour == chosenColour && <p>You're the winner :)!</p>}
              {theColour !== chosenColour && <p>You're the loser :(!</p>}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
