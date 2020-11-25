import React from "react";

const Paper = ({ exam }) => {
  return (
    <div className={exam ? "paper" : null}>
      <p className="questions">
        {exam?.map((item) => (
          <li className="easy" key={item.id}>
            {item.text}
            <br />
            <span className="marks">({item.marks}) marks</span>
          </li>
        ))}
      </p>
    </div>
  );
};

export default Paper;
