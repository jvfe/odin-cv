import React from "react";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

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
      <InputGroup className="my-2">
        <InputGroup.Prepend>
          <InputGroup.Text>From / To</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          value={education.fromDate}
          type="date"
          id="fromDate"
          name="fromDate"
          onChange={(e) => handleChange(e, id)}
        />
        <FormControl
          value={education.toDate}
          type="date"
          id="toDate"
          name="toDate"
          onChange={(e) => handleChange(e, id)}
        />
      </InputGroup>
      <Button variant="danger" onClick={() => handleDel(id)} block>
        Remove entry
      </Button>
    </div>
  );
};

export default Education;
