export const Level = ({ setretries, setHideLevelBtns }) => {
  const handleCLick = (e) => {
    e.target.name === "easy"
      ? setretries(8)
      : e.target.name === "medium"
      ? setretries(5)
      : setretries(3);
    setHideLevelBtns(false);
  };
  return (
    <>
      <button
        className="btn btn-primary btn-lg"
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
        className="btn btn-primary btn-lg"
        name="hard"
        onClick={handleCLick}
      >
        Hard 💀
      </button>
    </>
  );
};
