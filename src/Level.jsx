export const Level = ({ setretries, setHideLevelBtns, setUserDifficulty }) => {
  const handleCLick = (e) => {
    e.target.name === "easy"
      ? (setretries(8), setUserDifficulty(e.target.name))
      : e.target.name === "medium"
      ? (setretries(5), setUserDifficulty(e.target.name))
      : setretries(3);
    setHideLevelBtns(false);
  };
  return (
    <>
      <button
        className="btn btn-success btn-lg"
        name="easy"
        onClick={handleCLick}
      >
        Easy 😃
      </button>
      <button
        className="btn btn-primary btn-lg"
        name="medium"
        onClick={handleCLick}
      >
        Medium 🔥
      </button>
      <button
        className="btn btn-danger btn-lg"
        name="hard"
        onClick={handleCLick}
      >
        Hard 💀
      </button>

      <h4 style={{ padding: "1px", marginTop: "35px" }}>
        GAME RULES ARE MENTIONED BELOW
      </h4>

      <div className="gamerules">
        <ol>
          <li>SELECT ONE MODE TO PLAY THE GAME</li>
          <li>EASY MODE WITH 8 GUESSES AND WILL GET HINT FROM GUESS 5</li>
          <li>MEDIUM MODE WITH 5 GUESSES AND WILL GET HINT FROM GUESS 3</li>
          <li>HARD MODE WITH 3 GUESSES AND WILL NOT GET ANY HINT</li>
        </ol>
      </div>
    </>
  );
};
