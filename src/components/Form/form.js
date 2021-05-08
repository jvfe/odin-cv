import React from "react";
import PersonalInfo from "./Personal/personalInfo";
import ExpSection from "./Experience/expSection";
import EduSection from "./Education/eduSection";
import Col from "react-bootstrap/Col";

const CVForm = ({
  cv,
  handleChangePersonal,
  handleAddEducation,
  handleDelEducation,
  handleChangeEducation,
  handleAddExperience,
  handleDelExperience,
  handleChangeExperience,
}) => {
  return (
    <Col
      xs={12}
      lg={6}
      className="p-md-4 shadow mb-3 mb-lg-0 mr-3 bg-white rounded"
    >
      <PersonalInfo
        handleChange={handleChangePersonal}
        personal={cv.personal}
      ></PersonalInfo>
      <EduSection
        educations={cv.educations}
        handleAdd={handleAddEducation}
        handleDel={handleDelEducation}
        handleChange={handleChangeEducation}
      ></EduSection>
      <ExpSection
        experiences={cv.experiences}
        handleAdd={handleAddExperience}
        handleDel={handleDelExperience}
        handleChange={handleChangeExperience}
      ></ExpSection>
    </Col>
  );
};

export default CVForm;
