import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front-End Developer",
          "UI & UX Designer",
          "Data Analyst",
          "Distributed System Engineer",
          "Mobile Computing Engineer",
          "Digital Marketer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
