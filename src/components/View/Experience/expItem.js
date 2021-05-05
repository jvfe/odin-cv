import React from "react";
import { handleDates } from "../../utils";

const ExpItem = ({ exp }) => {
  const { fromYear, toYear } = handleDates(exp);

  return (
    <div className="my-2 px-2">
      <div className="item-grid">
        <div>
          <p className="course-name mb-1">{`${exp.position} - ${exp.companyName}`}</p>
        </div>
        <div>
          <p className="from-to-dates">{`${fromYear} - ${toYear}`}</p>
        </div>
      </div>
      <div className="job-container">
        <p className="job-description">{exp.jobDescription}</p>
      </div>
    </div>
  );
};

export default ExpItem;
