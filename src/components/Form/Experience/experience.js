import React from "react";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

const Experience = ({ handleChange, handleDel, experience, id }) => {
  return (
    <div className="my-1">
      <InputGroup className="my-2">
        <FormControl
          value={experience.position}
          type="text"
          id="position"
          name="position"
          placeholder="Position"
          onChange={(e) => handleChange(e, id)}
        />
        <FormControl
          value={experience.companyName}
          type="text"
          id="companyName"
          name="companyName"
          placeholder="Company"
          onChange={(e) => handleChange(e, id)}
        />
      </InputGroup>
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
      <FormControl
        className="my-2"
        onChange={(e) => handleChange(e, id)}
        value={experience.jobDescription}
        id="jobDescription"
        name="jobDescription"
        as="textarea"
        aria-label="With textarea"
        placeholder="Job description"
      />
      <Button variant="danger" onClick={() => handleDel(id)} block>
        Remove entry
      </Button>
    </div>
  );
};

export default Experience;
