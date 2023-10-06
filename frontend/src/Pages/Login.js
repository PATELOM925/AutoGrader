import React, { useState } from "react";
import validator from "validator";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    response.json().then((data) => {
                        // Successful signup, you can console.log the userId here
                        console.log("User ID:", data.userId);
                        window.location.href = `/user/${data.userId}`;
                    });
                }
                else {
                    response.json().then((data) => {
                        // Successful signup, you can console.log the userId here
                        console.log("sdgdfgdfg")
                        alert(data.message);
                    });

                }
            })
            .catch((error) => {
                console.error("An error occurred", error);
            });
    };

    const goToSignup = () => {
        window.location.href = "/signup";
    };


  return (
    <div class="background-element">
      <div className="main-whole">
        {/* login-text */}
        <h1 className="welcome">Welcome back!</h1>
        <h1 className="LoginTitleText">Log in to your account</h1>

        {/* login form */}
        <form onSubmit={handleSubmit} className="main-form">
          <div className="form-field">
            {/* email input */}
            {/* <img className="login-icon" alt="user"></img> */}
            <input
              className="form-input"
              type="email"
              id="email"
              autoComplete="on"
              placeholder="Username or E-mail"
              value={formData.email}
              onChange={handleInputChange}
            ></input>
          </div>

          <div className="form-field">
            {/* password input */}
            {/* <img className="login-icon" alt="password"></img> */}
            <input
              className="form-input"
              type="password"
              id="password"
              autoComplete="off"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            ></input>
          </div>

          <button className="login-button" type="submit">
            Log In
          </button>
        </form>

        <p>
          Don't have an account?{" "}
          <a href="/signup" onClick={goToSignup}>
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
