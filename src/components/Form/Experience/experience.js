import React from "react";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

const Experience = ({ handleChange, handleDel, experience, id }) => {
  return (
    <div className="my-1">
      <FormControl
        className="my-2"
        value={experience.companyName}
        type="text"
        id="companyName"
        name="companyName"
        placeholder="Company"
        onChange={(e) => handleChange(e, id)}
      />
      <FormControl
        className="my-2"
        value={experience.position}
        type="text"
        id="position"
        name="position"
        placeholder="Position"
        onChange={(e) => handleChange(e, id)}
      />
      <InputGroup className="my-2">
        <InputGroup.Prepend>
          <InputGroup.Text>From / To</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          value={experience.fromDate}
          type="date"
          id="fromDate"
          name="fromDate"
          onChange={(e) => handleChange(e, id)}
        />
        <FormControl
          value={experience.toDate}
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

export default Experience;
