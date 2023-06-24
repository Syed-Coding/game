export const Level = ({ setretries, setHideLevelBtns, setUserDifficulty }) => {
  const handleCLick = (e) => {
    e.target.name === "easy"
      ? (setretries(8), setUserDifficulty(e.target.name))
      : e.target.name === "medium"
      ? (setretries(5), setUserDifficulty(e.target.name))
      : (setretries(3), setUserDifficulty(e.target.name));
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

      <div className="gamerules">
        <ol>
          <li
            style={{ color: "#a2c0e4", fontSize: "20px", fontWeight: "bold" }}
          >
            GAME RULES ARE MENTIONED BELOW
          </li>
          <li>
            EASY MODE WITH 8 GUESSES AND WILL GET HINT FROM GUESS 5, ALSO
            DISPLAY YOUR GUESSED VALUES.
          </li>
          <li>
            MEDIUM MODE WITH 5 GUESSES AND WILL GET HINT FROM GUESS 3, ALSO
            DISPLAY YOUR GUESSED VALUES.
          </li>
          <li>
            HARD MODE WITH 3 GUESSES AND
            <span style={{ color: "blue" }}> WILLNOT </span> GET ANY HINT,
            <span style={{ color: "blue" }}> WILLNOT </span>
            DISPLAY YOUR GUESSED VALUES.
          </li>
        </ol>
      </div>
    </>
  );
};
