import uniqid from "uniqid";
import React, { Component } from "react";
import Header from "./components/header";
import CVForm from "./components/Form/form";
import CVView from "./components/View/view";
import Container from "react-bootstrap/Container";
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
          jobDescription: "",
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
        jobDescription: "",
        fromDate: "",
        toDate: "",
      });

      return { ...prevState, experiences: [...UpdatedExp] };
    });
  };

  render() {
    return (
      <div>
        <Header></Header>
        <Container fluid>
          <Row className="p-md-5 p-1">
            <CVForm
              personal={this.state.personal}
              experiences={this.state.experiences}
              educations={this.state.educations}
              handleChangePersonal={this.handleChangePersonal}
              handleAddEducation={this.handleAddEducation}
              handleDelEducation={this.handleDelEducation}
              handleChangeEducation={this.handleChangeEducation}
              handleAddExperience={this.handleAddExperience}
              handleDelExperience={this.handleDelExperience}
              handleChangeExperience={this.handleChangeExperience}
            ></CVForm>
            <CVView
              personal={this.state.personal}
              experiences={this.state.experiences}
              educations={this.state.educations}
            ></CVView>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;
