import React from "react";

export const GuessedList = ({ guessedValues }) => {
  return (
    <>
      {guessedValues.map((ele, i) => (
        <p key={i}>{`Your ${i + 1}${
          i + 1 === 1 ? "st" : i + 1 === 2 ? "nd" : i + 1 === 3 ? "rd" : "th"
        } Guess : ${ele}`}</p>
      ))}
    </>
  );
};
