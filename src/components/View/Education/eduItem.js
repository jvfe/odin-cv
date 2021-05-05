import React from "react";
import { handleDates } from "../../utils";

const EduItem = ({ edu }) => {
  const { fromYear, toYear } = handleDates(edu);
  return (
    <div className="item-grid my-3 px-2">
      <div>
        <p className="course-name mb-1">{edu.course}</p>
        <p className="school-name">{edu.schoolName}</p>
      </div>
      <div>
        <p className="city mb-1">{edu.city}</p>
        <p className="from-to-dates">{`${fromYear} - ${toYear}`}</p>
      </div>
    </div>
  );
};

export default EduItem;
