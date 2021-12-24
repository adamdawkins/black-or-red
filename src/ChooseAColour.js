const ChooseAColour = ({ setChosenColour }) => (
  <div>
    <h1>Choose a colour :)</h1>
    <button
      className="text-red-500 mr-5"
      onClick={() => setChosenColour("red")}
    >
      Red
    </button>
    <button onClick={() => setChosenColour("black")}>Black</button>
  </div>
);

export default ChooseAColour;
