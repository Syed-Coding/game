export const Level = ({ setretries, setHideLevelBtns }) => {
  const handleCLick = (e) => {
    e.target.name === "easy"
      ? setretries(8)
      : e.target.name === "medium"
      ? setretries(5)
      : setretries(2);
    setHideLevelBtns(false);
  };
  return (
    <>
      <button name="easy" onClick={handleCLick}>
        Easy
      </button>
      <button name="medium" onClick={handleCLick}>
        Medium
      </button>
      <button name="hard" onClick={handleCLick}>
        Hard
      </button>
    </>
  );
};
