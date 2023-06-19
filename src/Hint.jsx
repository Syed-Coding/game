import { useState } from "react";

export const Hint = ({ originalval }) => {
  console.log("hint", originalval);
  const [openHont, setopenHint] = useState(false);

  const hint =
    0 <= originalval && originalval < 10
      ? "Value In Between 0 and 9"
      : 10 <= originalval && originalval < 20
      ? "Value In Between 10 and 19"
      : 20 <= originalval && originalval < 30
      ? "Value is in 20s"
      : 30 <= originalval && originalval < 40
      ? "Value is in 30s"
      : 40 <= originalval && originalval < 50
      ? "Value is in 40s"
      : 50 <= originalval && originalval < 60
      ? "Value is in 50s"
      : 60 <= originalval && originalval < 70
      ? "Value is in 60s"
      : 70 <= originalval && originalval < 80
      ? "Value is in 70s"
      : 80 <= originalval && originalval < 90
      ? "Value is in 80s"
      : "Value In Between 90 and 100";
  return (
    <>
      <button className="btn btn-success" onClick={() => setopenHint(true)}>
        HINT
      </button>
      {openHont && hint}
    </>
  );
};
