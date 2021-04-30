import uniqid from "uniqid";
import React, { Component } from "react";
import Education from "./components/education";
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

  render() {
    return (
      <div>
        <PersonalInfo
          handleChange={this.handleChangePersonal}
          personal={this.state.personal}
        ></PersonalInfo>
        {this.state.educations.map((education) => {
          return (
            <Education
              handleChange={this.handleChangeEducation}
              education={education}
              key={education.id}
              id={education.id}
            ></Education>
          );
        })}
      </div>
    );
  }
}

export default Main;
