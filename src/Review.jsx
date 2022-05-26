import React, { useState } from "react";
import people from "./data";
import {
  FaArrowRight,
  FaArrowLeft,
  FaQuoteRight,
  FaPrescriptionBottle,
} from "react-icons/fa";

function Review() {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const checkIndex = (number) => {
    if (number < 0) {
      return people.length - 1;
    } else if (number > people.length - 1) {
      return 0;
    }
    return number;
  };
  const prevPerson = () => {
    const prev = index - 1;
    setIndex(checkIndex(prev));
    // if (index !== 0) {
    //   const prev = index - 1;
    //   setIndex(prev);
    // } else {
    //   setIndex(people.length - 1);
    // }
  };
  const nextPerson = () => {
    const next = index + 1;
    setIndex(checkIndex(next));
    // if (index !== people.length - 1) {
    //   const next = index + 1;
    //   setIndex(next);
    // } else {
    //   setIndex(0);
    // }
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkIndex(randomNumber));
    console.log(randomNumber);
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
      <button onClick={randomPerson}>Surprise me</button>
    </div>
  );
}

export default Review;
