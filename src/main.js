import uniqid from "uniqid";
import React, { Component } from "react";
import EduSection from "./components/Form/Education/eduSection";
import ExpSection from "./components/Form/Experience/expSection";
import PersonalInfo from "./components/Form/Personal/personalInfo";
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
      </div>
    );
  }
}

export default Main;
