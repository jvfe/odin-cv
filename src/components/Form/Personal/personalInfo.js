import React from "react";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

const Personal = ({ handleChange, personal }) => {
  return (
    <div className="mb-4">
      <div className="mt-2">
        <h3>Personal Information</h3>
        <InputGroup className="my-2">
          <FormControl
            onChange={handleChange}
            value={personal.firstName}
            type="text"
            id="nameInput"
            name="firstName"
            placeholder="First name"
          />
          <FormControl
            onChange={handleChange}
            value={personal.lastName}
            type="text"
            id="nameInput"
            name="lastName"
            placeholder="Last name"
          />
        </InputGroup>
        <InputGroup className="my-2">
          <FormControl
            onChange={handleChange}
            value={personal.email}
            type="email"
            id="emailInput"
            name="email"
            placeholder="Email"
          />
          <FormControl
            onChange={handleChange}
            value={personal.phone}
            type="tel"
            id="phoneInput"
            name="phone"
            placeholder="Phone number"
          />
        </InputGroup>
        <FormControl
          onChange={handleChange}
          value={personal.description}
          name="description"
          as="textarea"
          aria-label="With textarea"
          placeholder="Description"
        />
      </div>
    </div>
  );
};

export default Personal;
