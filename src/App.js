import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
const App = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const handleName = (e) => {
    setName(e.target.Value);
  };
  //   Name Validation
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const validateName = (e) => {
    let regex = /^([a-zA-Z]){2,10}$/;
    let str = e.target.value;
    if (regex.test(str)) {
      setNameError("");
    } else {
      setNameError(true);
    }
  };
  //   Email Validation
  const validateEmail = (e) => {
    let regex1 =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let str1 = e.target.value;
    if (regex1.test(str1)) {
      setEmailError("");
    } else {
      setEmailError(true);
    }
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  //   Password Validation
  const validatePassword = (e) => {
    let regex2 =
      /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]))(?=.{8,15})/;
    let str2 = e.target.value;
    if (regex2.test(str2)) {
      setPasswordError("");
    } else {
      setPasswordError(true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameError && emailError && passwordError) {
      alert("Your Data Submitted Successfully");
    } else {
      alert("Please Enter Valid Data");
    }
  };
  return (
    <div className="container my-3">
      <h1 className="text-center">Login Page</h1>
      <form action="" method="post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={handleName}
            onBlur={validateName}
            value={name}
          />
          {nameError && (
            <div className="error">
              Please Enter Valid Name. Use Uppercase or Lowercase Only.
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={handleEmail}
            onBlur={validateEmail}
            value={email}
            placeholder="abc@gmail.com"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>

          {emailError && <div className="error">Please Enter Valid Email</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={handlePassword}
            onBlur={validatePassword}
            value={password}
          />
          {passwordError && (
            <div className="error">
              Please Enter Password Between 8-15 Character. Atleast one
              Uppercase, one Lowercase, one digit and one Symbol
            </div>
          )}
        </div>
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
    </div>
  );
};
export default App;
