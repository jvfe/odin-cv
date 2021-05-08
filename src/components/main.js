import uniqid from "uniqid";
import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Header from "./header";
import CVForm from "./Form/form";
import CVView from "./View/view";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Main = () => {
  const initialState = {
    personal: {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@mail.com",
      phone: "5512341234",
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
  const [cv, setCV] = useState(initialState);

  const handleChangePersonal = (e) => {
    const { name, value } = e.target;

    setCV((prevState) => ({
      ...prevState,
      personal: {
        ...prevState.personal,
        [name]: value,
      },
    }));
  };

  const handleChangeEducation = (e, id) => {
    const { name, value } = e.target;

    setCV((prevState) => {
      const updatedEdu = prevState.educations.map((eduItem) =>
        eduItem.id === id ? { ...eduItem, [name]: value } : eduItem
      );

      return { ...prevState, educations: [...updatedEdu] };
    });
  };

  const handleDelEducation = (id) => {
    setCV((prevState) => {
      const updatedEdu = prevState.educations.filter((eduItem) => {
        return eduItem.id !== id;
      });

      return { ...prevState, educations: [...updatedEdu] };
    });
  };

  const handleAddEducation = () => {
    setCV((prevState) => {
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

  const handleChangeExperience = (e, id) => {
    const { name, value } = e.target;

    setCV((prevState) => {
      const UpdatedExp = prevState.experiences.map((expItem) =>
        expItem.id === id ? { ...expItem, [name]: value } : expItem
      );

      return { ...prevState, experiences: [...UpdatedExp] };
    });
  };

  const handleDelExperience = (id) => {
    setCV((prevState) => {
      const UpdatedExp = prevState.experiences.filter((expItem) => {
        return expItem.id !== id;
      });

      return { ...prevState, experiences: [...UpdatedExp] };
    });
  };

  const handleAddExperience = () => {
    setCV((prevState) => {
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

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <Header></Header>
      <Container fluid>
        <Row className="p-md-5 p-1">
          <CVForm
            cv={cv}
            handleChangePersonal={handleChangePersonal}
            handleAddEducation={handleAddEducation}
            handleDelEducation={handleDelEducation}
            handleChangeEducation={handleChangeEducation}
            handleAddExperience={handleAddExperience}
            handleDelExperience={handleDelExperience}
            handleChangeExperience={handleChangeExperience}
            handlePrint={handlePrint}
          />
          <CVView cv={cv} ref={componentRef} />
        </Row>
      </Container>
    </div>
  );
};

export default Main;
