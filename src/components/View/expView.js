import React from "react";

const ExpView = ({ experiences }) => {
  return (
    <div className="px-4 my-2">
      <h3 className="section-title">Experience</h3>
      {experiences.map((exp) => {
        const fromYear = new Date(exp.fromDate).getFullYear();
        const toYear = new Date(exp.toDate).getFullYear();
        return (
          <div className="my-2 px-2">
            <div className="item-grid">
              <div>
                <p className="course-name mb-1">{`${exp.position} - ${exp.companyName}`}</p>
              </div>
              <div>
                <p className="from-to-dates">
                  {(exp.fromDate && exp.toDate) !== ""
                    ? `${fromYear} - ${toYear}`
                    : ""}
                </p>
              </div>
            </div>
            <div className="job-container">
              <p className="job-description">{exp.jobDescription}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExpView;
