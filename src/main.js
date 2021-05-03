import uniqid from "uniqid";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Education from "./components/education";
import Experience from "./components/experience";
import PersonalInfo from "./components/personalInfo";
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
        schoolName: "",
        course: "",
        fromDate: "",
        toDate: "",
      });

      return { ...prevState, experiences: [...UpdatedExp] };
    });
  };

  render() {
    return (
      <div className="p-4">
        <div className="mb-4">
          <PersonalInfo
            handleChange={this.handleChangePersonal}
            personal={this.state.personal}
          ></PersonalInfo>
        </div>

        <div className="mb-4">
          <h3>Education</h3>
          {this.state.educations.map((education) => {
            return (
              <Education
                handleChange={this.handleChangeEducation}
                handleDel={this.handleDelEducation}
                education={education}
                key={education.id}
                id={education.id}
              ></Education>
            );
          })}
          <Button variant="primary" onClick={this.handleAddEducation} block>
            Add entry
          </Button>
        </div>
        <div>
          <h3>Experience</h3>
          {this.state.experiences.map((experience) => {
            return (
              <Experience
                handleChange={this.handleChangeExperience}
                handleDel={this.handleDelExperience}
                experience={experience}
                key={experience.id}
                id={experience.id}
              ></Experience>
            );
          })}
          <Button variant="primary" onClick={this.handleAddExperience} block>
            Add entry
          </Button>
        </div>
      </div>
    );
  }
}

export default Main;
