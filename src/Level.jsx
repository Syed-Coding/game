export const Level = ({ setLevel }) => {
  return (
    <>
      <button onClick={() => setLevel("easy")}>Easy</button>
      <button onClick={() => setLevel("medium")}>Medium</button>
      <button onClick={() => setLevel("hard")}>Hard</button>
    </>
  );
};
