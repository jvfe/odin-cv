import React from "react";
import FormControl from "react-bootstrap/FormControl";

const Personal = ({ handleChange, personal }) => {
  return (
    <div className="mt-2 mb-4">
      <h3>Personal Information</h3>
      <FormControl
        className="my-2"
        onChange={handleChange}
        value={personal.firstName}
        type="text"
        id="nameInput"
        name="firstName"
        placeholder="First name"
      />
      <FormControl
        className="my-2"
        onChange={handleChange}
        value={personal.lastName}
        type="text"
        id="nameInput"
        name="lastName"
        placeholder="Last name"
      />
      <FormControl
        className="my-2"
        onChange={handleChange}
        value={personal.email}
        type="email"
        id="emailInput"
        name="email"
        placeholder="Email"
      />
      <FormControl
        className="my-2"
        onChange={handleChange}
        value={personal.phone}
        type="tel"
        id="phoneInput"
        name="phone"
        placeholder="Phone number"
      />
    </div>
  );
};

export default Personal;
