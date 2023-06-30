import { useEffect, useState } from "react";
import "./App.css";
import { Level } from "./Level";
import { Hint } from "./Hint";
import Swal from "sweetalert2";
import { GuessedList } from "./GuessedList";
import { Modal } from "./Modal";
import { FinalModal } from "./FinalModal";
import { Loader } from "./Loader";

function App() {
  const [originalval, setOriginalVal] = useState(
    Math.floor(Math.random() * 101)
  );
  const [userval, setUserVal] = useState("");
  const [retries, setretries] = useState("SELECT ONE MODE TO PLAY THE GAME");
  const [hidelevelbtns, setHideLevelBtns] = useState(true);
  const [userdiificult, setUserDifficulty] = useState("");
  const [guessedValues, setGuessedValues] = useState([]);
  const [openmodal, setOpenModal] = useState(false);
  const [openfinalalert, setOpenFinalAlert] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOpenModal(true);
      setLoader(false);
    }, 3000);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userval === "") return alert("PLEASE TYPE YOUR GUESS AND CONTINUE");
    // console.log("user", userval);
    // console.log("org", originalval);
    // console.log(userdiificult);
    if (originalval === Number(userval)) {
      Swal.fire({
        title: `CONGRAGULATIONS 😊😊😊!!! YOU GUESSED RIGHT. Original Number is ${originalval}`,
        width: 600,
        padding: "3em",
        color: "#716add",

        backdrop: `
    rgba(0,0,123,0.4)
    url("/dicap.gif")
    top
    no-repeat
  `,
      }).then(() => {
        setOriginalVal(Math.floor(Math.random() * 101));
        setretries("PLAY AGAIN ? SELECT ONE MODE TO PLAY THE GAME");
        setHideLevelBtns(true);
        setUserVal("");
        setGuessedValues([]);
      });
    } else {
      if (userval > originalval) {
        Swal.fire({
          title: `SORRY YOU GUESSED WRONG , YOUR GUESS IS TOO HIGH`,
          width: 600,
          padding: "3em",
          color: "#716add",

          backdrop: `
    rgba(0,0,123,0.4)
    url("/bat.gif")
    top
    no-repeat
  `,
        }).then(() => {
          setUserVal("");
          setretries(retries - 1);
          setGuessedValues((prev) => {
            return [...prev, userval];
          });
        });
      } else {
        Swal.fire({
          title: `SORRY YOU GUESSED WRONG , YOUR GUESS IS TOO LOW`,
          width: 600,
          padding: "3em",
          color: "#716add",

          backdrop: `
    rgba(0,0,123,0.4)
    url("/scoobe.gif")
    top
    no-repeat
  `,
        }).then(() => {
          setUserVal("");
          setretries(retries - 1);
          setGuessedValues((prev) => {
            return [...prev, userval];
          });
        });
      }
    }
  };

  return (
    <>
      {loader && <Loader></Loader>}
      {openmodal && <Modal setOpenModal={setOpenModal}></Modal>}

      {!loader && (
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
                onChange={(e) => {
                  setUserVal(e.target.value > 100 ? 0 : e.target.value);
                }}
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

          {openfinalalert && (
            <FinalModal
              setOpenFinalAlert={setOpenFinalAlert}
              originalval={originalval}
            ></FinalModal>
          )}
          {retries === 0 &&
            (setOriginalVal(Math.floor(Math.random() * 101)),
            setretries("PLAY AGAIN ? SELECT ONE MODE TO PLAY THE GAME"),
            setHideLevelBtns(true),
            setOpenFinalAlert(true),
            setGuessedValues([]),
            setUserVal(""))}
          {userdiificult === "medium" && (
            <GuessedList guessedValues={guessedValues}></GuessedList>
          )}
          {userdiificult === "easy" && (
            <GuessedList guessedValues={guessedValues}></GuessedList>
          )}
          {retries <= 5 && userdiificult === "easy" && (
            <Hint originalval={originalval}></Hint>
          )}
          {retries <= 3 && userdiificult === "medium" && (
            <Hint originalval={originalval}></Hint>
          )}
        </div>
      )}
    </>
  );
}

export default App;
