import React, { useState } from "react";
import people from "./data";
import { FaArrowRight, FaArrowLeft, FaQuoteRight } from "react-icons/fa";

function Review() {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const prevPerson = () => {
    if (index !== 0) {
      const prev = index - 1;
      setIndex(prev);
    } else {
      setIndex(people.length - 1);
    }
  };
  const nextPerson = () => {
    if (index !== people.length - 1) {
      const next = index + 1;
      setIndex(next);
    } else {
      setIndex(0);
    }
  };

  return (
    <div>
      <img src={image} alt={name} />
      <span>
        <FaQuoteRight />
      </span>
      <h2>{name}</h2>
      <p>{job}</p>
      <p>{text}</p>
      <div className="btn-container">
        <button onClick={prevPerson}>
          <FaArrowLeft />
        </button>
        <button onClick={nextPerson}>
          <FaArrowRight />
        </button>
      </div>
      <button
        onClick={() => {
          console.log("surprised");
        }}
      >
        Surprise me
      </button>
    </div>
  );
}

export default Review;
