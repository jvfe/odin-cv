import React, { Component } from "react";
import PersonalView from "./Personal/personalView";
import ExpView from "./Experience/expView";
import EduView from "./Education/eduView";
import Col from "react-bootstrap/Col";

class CVView extends Component {
  render() {
    const { cv } = this.props;
    return (
      <Col id="cv-view" className="border bg-light shadow rounded">
        <PersonalView personal={cv.personal}></PersonalView>
        <ExpView experiences={cv.experiences}></ExpView>
        <EduView educations={cv.educations}></EduView>
      </Col>
    );
  }
}
export default CVView;
