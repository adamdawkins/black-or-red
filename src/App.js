import { useState } from "react";
import "./index.css";
import ChooseAColour from "./ChooseAColour";

const cardValues = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const suits = ["diamond", "heart", "club", "spade"];
const deck = [];

suits.forEach((suit) => {
  cardValues.forEach((value) => {
    deck.push({ value: value, suit: suit });
  });
});

const Card = ({ value, suit }) => {
  let colour = "text-black-500";

  if (suit === "heart" || suit === "diamond") {
    colour = "text-red-500";
  }

  return (
    <div
      className={`border w-24 h-36 m-5 text-3xl flex justify-center items-center ${colour} rounded shadow-lg`}
    >
      <span className="mr-1">{value}</span>
      <i className={`fas fa-${suit}`}></i>
    </div>
  );
};

const getColour = ({ suit }) => {
  if (suit === "diamond" || suit === "heart") {
    return "red";
  }

  return "black";
};

function App() {
  const [chosenColour, setChosenColour] = useState(null);
  const [dealStarted, setDealStarted] = useState(false);
  const [theCard, setTheCard] = useState(null);

  const deal = (event) => {
    event.preventDefault();
    setDealStarted(true);

    const selectCard = () => {
      const position = Math.floor(Math.random() * 52);
      setTheCard(deck[position]);
    };

    setTimeout(selectCard, 1000);
  };

  const reset = (event) => {
    event.preventDefault();
    setChosenColour(null);
    setTheCard(null);
    setDealStarted(false);
  };

  const textColor = {
    red: "text-red-500",
    black: "text-black-500",
  };

  if (!chosenColour) {
    return (
      <div className="App">
        <ChooseAColour setChosenColour={setChosenColour} />
      </div>
    );
  }

  return (
    <div className="App">
      <p>
        You have chosen{" "}
        <span className={textColor[chosenColour]}>{chosenColour}</span>
      </p>

      {!dealStarted && (
        <button
          onClick={(event) => deal(event)}
          disabled={theCard}
          className={["border border-black p-3 font-bold text-xl"]}
        >
          Deal!
        </button>
      )}

      {dealStarted && !theCard && (
        <i className="fad fa-spinner-third animate-spin text-3xl text-gray-500"></i>
      )}

      {theCard && (
        <>
          <Card {...theCard} />
          {getColour(theCard) === chosenColour && <p>You're the winner :)!</p>}
          {getColour(theCard) !== chosenColour && <p>You're the loser :(!</p>}
          <button onClick={(event) => reset(event)}>Start Again</button>
        </>
      )}
    </div>
  );
}

export default App;
