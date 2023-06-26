export const FinalModal = ({ setOpenFinalAlert, originalval }) => {
  return (
    <div className="final-popup">
      <div className="final-popup-content">
        <p>
          {`MAXIMUM GUESSES EXCEEDED.THE ORIGINAL NUMBER WAS ${originalval}`}
        </p>
        <button
          className="final-close-popup"
          onClick={() => setOpenFinalAlert(false)}
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
};
