import { useEffect, useState } from "react";
import "./App.css";
import { Level } from "./Level";

function App() {
  const [originalval, setOriginalVal] = useState(
    Math.floor(Math.random() * 101)
  );
  const [userval, setUserVal] = useState("");
  const [level, setLevel] = useState("");
  const [retries, setretries] = useState("");
  useEffect(() => {
    level === "easy"
      ? setretries(7)
      : level === "medium"
      ? setretries(5)
      : setretries(2);
  }, [level]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user", userval);
    console.log("org", originalval);

    if (originalval === Number(userval)) {
      alert("guess right");
      setOriginalVal(Math.floor(Math.random() * 101));
      setretries(2);
      setUserVal("");
    } else {
      alert("guessed wrong");
      if (userval > originalval) {
        alert("your guess is far from original value ");
      } else {
        alert("your guess is low from original value ");
      }
      setretries(retries - 1);
    }
  };
  return (
    <>
      <Level setLevel={setLevel}></Level>
      {retries ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="guess the number"
            value={userval}
            onChange={(e) => setUserVal(e.target.value)}
            autoFocus
          />
          <button type="submit">Guess me</button>
        </form>
      ) : (
        <p>Maximum tries exceeded</p>
      )}
      <p>no of reties: {`${retries}`}</p>
      {!retries && <p> Orginal number is {`${originalval}`}</p>}
    </>
  );
}

export default App;
