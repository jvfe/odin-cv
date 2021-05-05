import React from "react";
import ExpItem from "./expItem";

const ExpView = ({ experiences }) => {
  return (
    <div className="px-4 my-2">
      <h3 className="section-title">Experience</h3>
      {experiences.map((exp) => {
        return <ExpItem exp={exp} key={exp.id}></ExpItem>;
      })}
    </div>
  );
};

export default ExpView;
