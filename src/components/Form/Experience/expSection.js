import React from "react";
import Button from "react-bootstrap/Button";
import Experience from "./experience";

const ExpSection = ({ experiences, handleChange, handleDel, handleAdd }) => {
  return (
    <div>
      <h3>Experience</h3>
      {experiences.map((experience) => {
        return (
          <Experience
            handleChange={handleChange}
            handleDel={handleDel}
            experience={experience}
            key={experience.id}
            id={experience.id}
          ></Experience>
        );
      })}
      <Button variant="primary" onClick={handleAdd} block>
        Add entry
      </Button>
    </div>
  );
};

export default ExpSection;
