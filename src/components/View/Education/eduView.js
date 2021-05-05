import React from "react";
import EduItem from "./eduItem";

const EduView = ({ educations }) => {
  return (
    <div className="px-4 my-4">
      <h3 className="section-title">Education</h3>
      {educations.map((edu) => {
        return <EduItem edu={edu} key={edu.id}></EduItem>;
      })}
    </div>
  );
};

export default EduView;
