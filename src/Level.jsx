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
    </>
  );
};
