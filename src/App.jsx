import { useState } from "react";
import "./App.css";
import { Level } from "./Level";
import { Hint } from "./Hint";
import Swal from "sweetalert2";

function App() {
  const [originalval, setOriginalVal] = useState(
    Math.floor(Math.random() * 101)
  );
  const [userval, setUserVal] = useState("");
  const [retries, setretries] = useState("Select The Level Of Difficulty");
  const [hidelevelbtns, setHideLevelBtns] = useState(true);
  const [userdiificult, setUserDifficulty] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userval === "") return alert("PLEASE TYPE YOUR GUESS AND CONTINUE");
    // console.log("user", userval);
    // console.log("org", originalval);

    if (originalval === Number(userval)) {
      Swal.fire({
        title: `CONGRAGULATIONS 😊😊😊!!! YOU GUESSED RIGHT. Original Number is ${originalval}`,
        width: 600,
        padding: "3em",
        color: "#716add",

        backdrop: `
    rgba(0,0,123,0.4)
    url("/babywrath.gif")
    top
    no-repeat
  `,
      });
      setOriginalVal(Math.floor(Math.random() * 101));
      setretries("Play Again? Select The Level Of Difficulty ");
      setHideLevelBtns(true);
      setUserVal("");
    } else {
      if (userval > originalval) {
        Swal.fire({
          title: `SORRY YOU GUESSED WRONG , Your Guess Is Far From Original Value`,
          width: 600,
          padding: "3em",
          color: "#716add",

          backdrop: `
    rgba(0,0,123,0.4)
    url("/kpaclalitha-vietnam-colony_converted.gif")
    top
    no-repeat
  `,
        });
      } else {
        Swal.fire({
          title: `SORRY YOU GUESSED WRONG , Your Guess Is Low From Original Value`,
          width: 600,
          padding: "3em",
          color: "#716add",

          backdrop: `
    rgba(0,0,123,0.4)
    url("/spooky-valak.gif")
    top
    no-repeat
  `,
        });
      }
      setUserVal("");
      setretries(retries - 1);
    }
  };
  return (
    <>
      <div className="center">
        <h1>GUESS THE NUMBER</h1>
        <h2
          style={{
            color: "violet",
            padding: "1px",
            marginBottom: "35px",
            textTransform: "uppercase",
          }}
        >
          Guess a number from 0-100
        </h2>
        <h4 style={{ padding: "1px", marginBottom: "35px" }}>
          GUESSES LEFT : <span style={{ color: "red" }}>{`${retries}`}</span>
        </h4>
        {hidelevelbtns && (
          <Level
            setretries={setretries}
            setHideLevelBtns={setHideLevelBtns}
            setUserDifficulty={setUserDifficulty}
          ></Level>
        )}
        {retries !== 0 && !hidelevelbtns && (
          <form onSubmit={handleSubmit}>
            <input
              className="number-input"
              type="number"
              placeholder="Guess The Number"
              value={userval}
              onChange={(e) =>
                setUserVal(e.target.value > 100 ? 0 : e.target.value)
              }
              autoFocus
            />
            <br></br>

            <button
              className={
                retries <= 2
                  ? "btn btn-lg btn-danger"
                  : "btn btn-lg btn-primary"
              }
              type="submit"
            >
              {retries <= 2 ? "OH !!! No 😱" : "GUESS ME 😊"}
            </button>
          </form>
        )}
        {retries === 0 && <h3>Maximum Guesses Exceeded</h3>}
        {retries <= 5 && userdiificult === "easy" && (
          <Hint originalval={originalval}></Hint>
        )}
        {retries <= 3 && userdiificult === "medium" && (
          <Hint originalval={originalval}></Hint>
        )}

        {!retries && (
          <h3 style={{ color: "violet" }}>
            Orginal Number Was {`${originalval}`}
          </h3>
        )}
      </div>
    </>
  );
}

export default App;
