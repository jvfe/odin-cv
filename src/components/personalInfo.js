import React from "react";

const Personal = ({ handleChange, personal }) => {
  return (
    <div>
      <div>
        <h1>Personal Info</h1>
        <input
          onChange={handleChange}
          value={personal.firstName}
          type="text"
          id="nameInput"
          name="firstName"
          placeholder="First name"
        />
        <input
          onChange={handleChange}
          value={personal.lastName}
          type="text"
          id="nameInput"
          name="lastName"
          placeholder="Last name"
        />
        <input
          onChange={handleChange}
          value={personal.email}
          type="email"
          id="emailInput"
          name="email"
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          value={personal.phone}
          type="tel"
          id="phoneInput"
          name="phone"
          placeholder="phone"
        />
      </div>
    </div>
  );
};

export default Personal;
