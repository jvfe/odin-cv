import React from "react";
import PersonalView from "./Personal/personalView";
import ExpView from "./Experience/expView";
import EduView from "./Education/eduView";
import Col from "react-bootstrap/Col";

const CVView = ({ personal, experiences, educations }) => {
  return (
    <Col id="cv-view" className="border bg-light shadow rounded">
      <PersonalView personal={personal}></PersonalView>
      <ExpView experiences={experiences}></ExpView>
      <EduView educations={educations}></EduView>
    </Col>
  );
};

export default CVView;
