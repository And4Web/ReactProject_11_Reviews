import React, { useState } from "react";
import people from "./data";
import { FaArrowRight, FaArrowLeft, FaQuoteRight } from "react-icons/fa";

function Review() {
  const [index, setIndex] = useState(1);
  const { id, name, job, image, text } = people[index];
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
        <button>
          <FaArrowLeft />
        </button>
        <button>
          <FaArrowRight />
        </button>
      </div>
      <button>Surprise me</button>
    </div>
  );
}

export default Review;
