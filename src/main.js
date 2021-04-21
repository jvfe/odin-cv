import React, { Component } from "react";
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

  render() {
    return (
      <div>
        <PersonalInfo
          handleChange={this.handleChangePersonal}
          personal={this.state.personal}
        ></PersonalInfo>
      </div>
    );
  }
}

export default Main;
