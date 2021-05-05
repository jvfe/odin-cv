import React from "react";

const PersonalView = ({ personal }) => {
  return (
    <div>
      <div className="header-section mt-2">
        <h1 className="cv-name">{`${personal.firstName} ${personal.lastName}`}</h1>
        <p className="contacts">{`${personal.email} ● ${personal.phone}`}</p>
      </div>
      <div className="description px-4 my-4">
        <h3 className="section-title">About me</h3>
        <p className="about-me">{personal.description}</p>
      </div>
    </div>
  );
};

export default PersonalView;
