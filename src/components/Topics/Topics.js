import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Quiz from "../Quiz/Quiz";
import "./Topics.css";

const Topics = () => {
  const [loaderData, setLoaderData] = useState([]);

  useEffect(() => {
    const url = "https://openapi.programming-hero.com/api/quiz";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLoaderData(data.data));
  }, []);
  return (
    <div className="topics-container">
      <span
        style={{ fontSize: "2.5rem", color: "#3db4f8", fontWeight: "bold" }}
      >
        <Typewriter
          words={["Quiz Menu", "Test Your Web Skill"]}
          loop={150}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
      <div className="topics">
        {loaderData?.map((data) => (
          <Quiz key={data.id} data={data}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Topics;
