import React from "react";

const EduView = ({ educations }) => {
  return (
    <div className="px-4 my-4">
      <h3 className="section-title">Education</h3>
      {educations.map((edu) => {
        const fromYear = new Date(edu.fromDate).getFullYear();
        const toYear = new Date(edu.toDate).getFullYear();
        return (
          <div className="item-grid my-3 px-2">
            <div>
              <p className="course-name mb-1">{edu.course}</p>
              <p className="school-name">{edu.schoolName}</p>
            </div>
            <div>
              <p className="city mb-1">{edu.city}</p>
              <p className="from-to-dates">
                {(edu.fromDate && edu.toDate) !== ""
                  ? `${fromYear} - ${toYear}`
                  : ""}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EduView;
