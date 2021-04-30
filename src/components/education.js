import React from "react";

const Education = ({ handleChange, education, id }) => {
  return (
    <div>
      <h1>Education</h1>
      <input
        value={education.schoolName}
        type="text"
        id="schoolName"
        name="schoolName"
        placeholder="Institution"
        onChange={(e) => handleChange(e, id)}
      />
      <input
        value={education.course}
        type="text"
        id="course"
        name="course"
        placeholder="Title of study"
        onChange={(e) => handleChange(e, id)}
      />
      <input
        value={education.fromDate}
        type="date"
        id="fromDate"
        name="fromDate"
        onChange={(e) => handleChange(e, id)}
      />
      <input
        value={education.toDate}
        type="date"
        id="toDate"
        name="toDate"
        onChange={(e) => handleChange(e, id)}
      />
    </div>
  );
};

export default Education;
