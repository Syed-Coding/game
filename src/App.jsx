import { useState } from "react";
import "./App.css";
import { Level } from "./Level";

function App() {
  const [originalval, setOriginalVal] = useState(
    Math.floor(Math.random() * 101)
  );
  const [userval, setUserVal] = useState("");
  const [retries, setretries] = useState(2);
  const [hidelevelbtns, setHideLevelBtns] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user", userval);
    console.log("org", originalval);

    if (originalval === Number(userval)) {
      alert(`GUESS RIGHT , Original number is ${originalval}`);
      setOriginalVal(Math.floor(Math.random() * 101));
      setretries(2);
      setHideLevelBtns(true);
      setUserVal("");
    } else {
      alert("SRY GUESSED WRONG");
      setUserVal("");
      if (userval > originalval) {
        alert("Your Guess Is Far From Original Value ");
      } else {
        alert("Your Guess Is Low From Original Value ");
      }
      setretries(retries - 1);
    }
  };
  return (
    <>
      {hidelevelbtns && (
        <Level
          setretries={setretries}
          setHideLevelBtns={setHideLevelBtns}
        ></Level>
      )}
      {retries ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Guess The Number"
            value={userval}
            onChange={(e) =>
              setUserVal(e.target.value > 100 ? 0 : e.target.value)
            }
            autoFocus
          />
          <button type="submit">Guess me</button>
        </form>
      ) : (
        <p>Maximum tries exceeded</p>
      )}
      <p>No Of Retries: {`${retries}`}</p>
      {!retries && <p> Orginal number is {`${originalval}`}</p>}
    </>
  );
}

export default App;
