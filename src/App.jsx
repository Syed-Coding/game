import { useEffect, useState } from "react";
import "./App.css";
import { Level } from "./Level";
import ConfettiExplosion from "confetti-explosion-react";

function App() {
  const [originalval, setOriginalVal] = useState(
    Math.floor(Math.random() * 101)
  );
  const [userval, setUserVal] = useState("");
  const [retries, setretries] = useState("Select The Level Of Difficulty");
  const [hidelevelbtns, setHideLevelBtns] = useState(true);
  const [confettiexp, setConfettiExplo] = useState(false);

  useEffect(() => {
    setConfettiExplo(false);
  }, [userval]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userval) return alert("PLEASE TYPE YOUR GUESS AND CONTINUE");
    // console.log("user", userval);
    // console.log("org", originalval);

    if (originalval === Number(userval)) {
      alert(
        `CONGRAGULATIONS 😊😊😊!!! GUESS RIGHT , Original number is ${originalval}`
      );
      setOriginalVal(Math.floor(Math.random() * 101));
      setConfettiExplo(true);
      setretries("Play Again? Select The Level Of Difficulty ");
      setHideLevelBtns(true);
      // setUserVal("");
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
      {confettiexp && (
        <ConfettiExplosion
          force={0.6}
          duration={5000}
          particleCount={200}
          height={1600}
          width={1600}
        />
      )}

      <div className="center">
        <h1>GUESS THE NUMBER</h1>
        <h2 style={{ color: "green" }}>
          Guess a number from 1-100. Guess right for an APPLAUSE🎊🎊🎊!
        </h2>
        {hidelevelbtns && (
          <Level
            setretries={setretries}
            setHideLevelBtns={setHideLevelBtns}
          ></Level>
        )}
        {retries && !hidelevelbtns && (
          <form onSubmit={handleSubmit}>
            <input
              className="number-input"
              type="text"
              placeholder="Guess The Number"
              value={userval}
              onChange={(e) =>
                setUserVal(e.target.value > 100 ? 0 : e.target.value)
              }
              autoFocus
            />
            <br></br>

            <button className="btn btn-lg btn-primary" type="submit">
              GUESS MEE {retries < 2 ? "😱" : "😊"}
            </button>
          </form>
        )}
        {retries === 0 && <h3>Maximum Guesses Exceeded</h3>}

        <h4>
          GUESSES LEFT : <span style={{ color: "red" }}>{`${retries}`}</span>
        </h4>
        {!retries && (
          <h3 style={{ color: "violet" }}>
            {" "}
            Orginal Number Was {`${originalval}`}
          </h3>
        )}
      </div>
    </>
  );
}

export default App;
