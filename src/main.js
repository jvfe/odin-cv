import uniqid from "uniqid";
import React, { Component } from "react";
import EduSection from "./components/Form/Education/eduSection";
import ExpSection from "./components/Form/Experience/expSection";
import PersonalInfo from "./components/Form/Personal/personalInfo";
import PersonalView from "./components/View/personalView";
import EduView from "./components/View/eduView";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      personal: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        description: "",
      },
      educations: [
        {
          id: uniqid(),
          schoolName: "",
          course: "",
          city: "",
          fromDate: "",
          toDate: "",
        },
      ],
      experiences: [
        {
          id: uniqid(),
          companyName: "",
          position: "",
          fromDate: "",
          toDate: "",
        },
      ],
    };
  }

  handleChangePersonal = (e) => {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      personal: {
        ...prevState.personal,
        [name]: value,
      },
    }));
  };

  handleChangeEducation = (e, id) => {
    const { name, value } = e.target;

    this.setState((prevState) => {
      const updatedEdu = prevState.educations.map((eduItem) =>
        eduItem.id === id ? { ...eduItem, [name]: value } : eduItem
      );

      return { ...prevState, educations: [...updatedEdu] };
    });
  };

  handleDelEducation = (id) => {
    this.setState((prevState) => {
      const updatedEdu = prevState.educations.filter((eduItem) => {
        return eduItem.id !== id;
      });

      return { ...prevState, educations: [...updatedEdu] };
    });
  };

  handleAddEducation = () => {
    this.setState((prevState) => {
      let updatedEducations = [...prevState.educations];

      updatedEducations.push({
        id: uniqid(),
        schoolName: "",
        course: "",
        city: "",
        fromDate: "",
        toDate: "",
      });

      return { ...prevState, educations: [...updatedEducations] };
    });
  };

  handleChangeExperience = (e, id) => {
    const { name, value } = e.target;

    this.setState((prevState) => {
      const UpdatedExp = prevState.experiences.map((expItem) =>
        expItem.id === id ? { ...expItem, [name]: value } : expItem
      );

      return { ...prevState, experiences: [...UpdatedExp] };
    });
  };

  handleDelExperience = (id) => {
    this.setState((prevState) => {
      const UpdatedExp = prevState.experiences.filter((expItem) => {
        return expItem.id !== id;
      });

      return { ...prevState, experiences: [...UpdatedExp] };
    });
  };

  handleAddExperience = () => {
    this.setState((prevState) => {
      let UpdatedExp = [...prevState.experiences];

      UpdatedExp.push({
        id: uniqid(),
        companyName: "",
        position: "",
        fromDate: "",
        toDate: "",
      });

      return { ...prevState, experiences: [...UpdatedExp] };
    });
  };

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" className="py-3">
          <Navbar.Brand>Odin-CV</Navbar.Brand>
        </Navbar>
        <Container fluid>
          <Row className="p-md-5 p-1">
            <Col
              xs={12}
              lg={6}
              className="p-md-4 shadow mb-3 mb-lg-0 mr-3 bg-white rounded"
            >
              <PersonalInfo
                handleChange={this.handleChangePersonal}
                personal={this.state.personal}
              ></PersonalInfo>
              <EduSection
                educations={this.state.educations}
                handleAdd={this.handleAddEducation}
                handleDel={this.handleDelEducation}
                handleChange={this.handleChangeEducation}
              ></EduSection>
              <ExpSection
                experiences={this.state.experiences}
                handleAdd={this.handleAddExperience}
                handleDel={this.handleDelExperience}
                handleChange={this.handleChangeExperience}
              ></ExpSection>
            </Col>
            <Col id="cv-view" className="border bg-light shadow rounded">
              <PersonalView personal={this.state.personal}></PersonalView>
              <EduView educations={this.state.educations}></EduView>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;
