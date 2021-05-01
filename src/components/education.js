import React from "react";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

const Education = ({ handleChange, handleDel, education, id }) => {
  return (
    <div className="my-1">
      <FormControl
        className="my-2"
        value={education.schoolName}
        type="text"
        id="schoolName"
        name="schoolName"
        placeholder="Institution"
        onChange={(e) => handleChange(e, id)}
      />
      <FormControl
        className="my-2"
        value={education.course}
        type="text"
        id="course"
        name="course"
        placeholder="Title of study"
        onChange={(e) => handleChange(e, id)}
      />
      <FormControl
        className="my-2"
        value={education.fromDate}
        type="date"
        id="fromDate"
        name="fromDate"
        onChange={(e) => handleChange(e, id)}
      />
      <FormControl
        className="my-2"
        value={education.toDate}
        type="date"
        id="toDate"
        name="toDate"
        onChange={(e) => handleChange(e, id)}
      />
      <Button variant="danger" onClick={() => handleDel(id)} block>
        Remove entry
      </Button>
    </div>
  );
};

export default Education;
