import React, { useState } from "react";
import questions from "./data";
import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronCircleDown,
  FaChevronCircleUp,
} from "react-icons/fa";

function Card() {
  const [index, setIndex] = useState(0);
  const [expand, setExpand] = useState(false);

  const checkNumber = (number) => {
    if (number > questions.length - 1) {
      return 0;
    }
    if (number < 0) {
      return questions.length - 1;
    }
    return number;
  };

  const nextQuestion = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      if (expand === true) {
        setExpand(!expand);
      }
      return checkNumber(newIndex);
    });
  };

  const prevQuestion = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      if (expand === true) {
        setExpand(!expand);
      }
      return checkNumber(newIndex);
    });
  };

  return (
    <div className="container">
      <article className="card">
        <h4>{questions[index].question}</h4>
        <p className="answer">
          {expand
            ? questions[index].text
            : `${questions[index].text.substring(0, 0)}`}
        </p>
        <button onClick={() => setExpand(!expand)}>
          {expand ? <FaChevronCircleUp /> : <FaChevronCircleDown />}
        </button>
        <div className="navigation">
          <button onClick={prevQuestion}>
            <FaArrowLeft />
          </button>
          <button onClick={nextQuestion}>
            <FaArrowRight />
          </button>
        </div>
      </article>
    </div>
  );
}

export default Card;
