import React from "react";
import Button from "react-bootstrap/Button";
import Education from "./education";

const EduSection = ({ educations, handleChange, handleDel, handleAdd }) => {
  return (
    <div className="mb-4">
      <h3>Education</h3>
      {educations.map((education) => {
        return (
          <Education
            handleChange={handleChange}
            handleDel={handleDel}
            education={education}
            key={education.id}
            id={education.id}
          ></Education>
        );
      })}
      <Button variant="primary" onClick={handleAdd} block>
        Add entry
      </Button>
    </div>
  );
};

export default EduSection;
