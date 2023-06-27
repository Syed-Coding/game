export const Modal = ({ setOpenModal }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <ul>
          <li>
            <strong>EASY MODE</strong> WITH 8 GUESSES AND WILL GET HINT FROM
            GUESS 5, ALSO DISPLAY YOUR GUESSED VALUES.
          </li>
          <li>
            <strong>MEDIUM MODE</strong> WITH 5 GUESSES AND WILL GET HINT FROM
            GUESS 3, ALSO DISPLAY YOUR GUESSED VALUES.
          </li>
          <li>
            <strong>HARD MODE</strong> WITH 3 GUESSES AND
            <span style={{ color: "blue" }}> WILLNOT </span> GET ANY HINT,
            <span style={{ color: "blue" }}> WILLNOT </span>
            DISPLAY YOUR GUESSED VALUES.
          </li>
        </ul>
        <button className="close-popup" onClick={() => setOpenModal(false)}>
          PLAY
        </button>
      </div>
    </div>
  );
};
