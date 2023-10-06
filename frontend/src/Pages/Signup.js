import React, { useState } from "react";
import validator from 'validator';
import './Login.css';

const Signup = () => {
    const initialFormData = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  
    const [formData, setFormData] = useState(initialFormData);
  
    const initialErrors = {
      email: "",
      password: "",
      confirmPassword: "",
    };
  
    const [errors, setErrors] = useState(initialErrors);
  
    const handleInputChange = (e) => {
      const { id, value } = e.target;
  
      setErrors({ ...errors, [id]: "" });
  
      setFormData({ ...formData, [id]: value });
    };
  
    const validateEmail = (email) => {
      return validator.isEmail(email);
    };
  
    const validatePassword = (password) => {
      return password.length >= 5;
    };
    const handleKeyPress = (e, nextInputId) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const nextInput = document.getElementById(nextInputId);
        if (nextInput) {
          nextInput.focus();
        }
      }
    };
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const { email, password, confirmPassword } = formData;
      const emailValid = validateEmail(email);
      const passwordValid = validatePassword(password);
  
      if (!emailValid) {
        setErrors({ ...errors, email: "Invalid email address" });
        return;
      }
  
      if (!passwordValid) {
        setErrors({
          ...errors,
          password: "Password must be at least 5 characters long",
        });
        return;
      }
      if (password !== confirmPassword) {
        setErrors({ ...errors, confirmPassword: "Passwords do not match" });
        return;
      }
  
      setErrors(initialErrors);
  
      fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            response.json().then((data) => {
              // Successful signup, redirect to the user's profile
              // history.push(`/${data.userId}`);
              window.location.href= '/login';
            })
          } else {
            response.json().then((data) => {
              // Signup failed, display an error popup
              alert(data.message);
            });
          }
        })
        .catch((error) => {
          console.error("An error occurred", error);
        });
    };
  
    const goToLogin = () => {
      window.location.href = "/login";
  };
  

    return (
        <div className="background-element">
            <div className="main-whole">
                <h1 className="newhere">New here?</h1>
                <h1 className="SignupTitleText">Signup with us!</h1>

                <form onSubmit={handleSubmit} className="main-form">
                    <div className="form-field">
                        <input
                            className="form-input"
                            type="text"
                            id="name"
                            autoComplete="on"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            onKeyPress={(e) => handleKeyPress(e, "email")}
                        ></input>
                    </div>

                    <div className="form-field">
                        <input
                            className="form-input"
                            type="email"
                            id="email"
                            autoComplete="on"
                            placeholder="Username or E-mail"
                            value={formData.email}
                            onChange={handleInputChange}
                            onBlur={() => {
                                if (!validateEmail(formData.email)) {
                                    setErrors({ ...errors, email: "Invalid email address" });
                                }
                            }}
                            onKeyPress={(e) => handleKeyPress(e, "password")}
                        ></input>
                        {errors.email && <p className="error-message">{errors.email}</p>}
                    </div>

                    <div className="form-field">
                        <input
                            className="form-input"
                            type="password"
                            id="password"
                            autoComplete="off"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                            onBlur={() => {
                                if (!validatePassword(formData.password)) {
                                    setErrors({ ...errors, password: "Password must be at least 5 characters long" });
                                }
                            }}
                            onKeyPress={(e) => handleKeyPress(e, "confirmPassword")}
                        ></input>
                        {errors.password && <p className="error-message">{errors.password}</p>}
                    </div>

                    <div className="form-field">
                        <input
                            className="form-input"
                            type="password"
                            id="confirmPassword"
                            autoComplete="off"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            onBlur={() => {
                                if (formData.password !== formData.confirmPassword) {
                                    setErrors({ ...errors, confirmPassword: "Passwords do not match" });
                                }
                            }}
                            onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    handleSubmit(e);
                                }
                            }}
                        ></input>
                        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
                    </div>

                    <button className="login-button" type="submit">Signup</button>
                </form>

                <p>
                    Already have an account? <a href="/login" onClick={goToLogin}>Log In here</a>
                </p>
            </div>
        </div>
    );
}

export default Signup;