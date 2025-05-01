import React, { useState } from "react";
import Image from "../assets/img/Rectangle 4.svg";
import Sun from "../assets/img/Vector (1).png";
import imguser from "../assets/svg/usernamer.svg";
import password from "../assets/svg/password.svg";
import google from "../assets/svg/google 1.svg";
import facebook from "../assets/svg/facebook 1.svg";
import email from "../assets/svg/email.png";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = form;
    let formIsValid = true;
    let errorMessages = { username: "", email: "", password: "" };

    if (!username) {
      formIsValid = false;
      errorMessages.username = "Username is required";
    }

    if (!email) {
      formIsValid = false;
      errorMessages.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formIsValid = false;
      errorMessages.email = "Invalid email format";
    }

    if (!password) {
      formIsValid = false;
      errorMessages.password = "Password is required";
    } else if (password.length < 6) {
      formIsValid = false;
      errorMessages.password = "Password must be at least 6 characters";
    }

    if (!formIsValid) {
      setError(errorMessages);
    } else {
      setError({ username: "", email: "", password: "" });
      navigate("/loading");
    }
  };

  return (
    <>
      <div title="Sun image container">
        <img src={Sun} alt="Sun" className="sun" />
      </div>
      <div
        className="contentall w-[97%] flex m-auto justify-center h-[100%] items-center mt-6 gap-48"
        title="Main signup container"
      >
        <div
          className="h-[660px] text-center w-[400px] items-center"
          title="Signup section"
        >
          <div className="welcom" title="Signup welcome text">
            <h1
              className="text-[5rem] font-bold text-[#1C1C1C]"
              title="Signup title"
            >
              Welcome
            </h1>
            <p
              className="text-[#1C1C1C] font-medium text-[20px]"
              title="Signup subtitle"
            >
              Join us and start your journey
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="form mt-10 flex flex-col gap-4"
            title="Signup form"
          >
            <div className="relative" title="Username field">
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Username"
                className="input pl-10 pr-4 py-2 rounded border border-gray-300 w-full"
                title="Enter your username"
              />
              <span
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
                title="Username icon"
              >
                <img src={imguser} alt="Username Icon" className="w-5 h-5" />
              </span>
            </div>
            {error.username && (
              <p className="text-red-500 text-sm" title="Username error">
                {error.username}
              </p>
            )}

            <div className="relative mt-3" title="Email field">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="input pl-4 pr-4 py-2 rounded border border-gray-300 w-full"
                title="Enter your email"
              />
              <span
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
                title="Username icon"
              >
                <img src={email} alt="Username Icon" className="w-5 h-5" />
              </span>
            </div>
            {error.email && (
              <p className="text-red-500 text-sm" title="Email error">
                {error.email}
              </p>
            )}

            <div className="relative mt-3" title="Password field">
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="input pl-10 pr-4 py-2 rounded border border-gray-300 w-full"
                title="Enter your password"
              />
              <span
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
                title="Password icon"
              >
                <img src={password} alt="Password Icon" className="w-5 h-5" />
              </span>
            </div>
            {error.password && (
              <p className="text-red-500 text-sm" title="Password error">
                {error.password}
              </p>
            )}

            <button
              type="submit"
              className="bg-[#1C1C1C] text-white w-[400px] items-center mt-4 rounded-[7px] h-[60px] cursor-pointer hover:bg-[#2b2b2b] shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 active:scale-95"
              title="Submit signup form"
            >
              Sign Up
            </button>
          </form>

          <div
            className="flex items-center justify-center space-x-2 mt-7"
            title="Login option"
          >
            <hr className="flex-1" />
            <p
              className="text-[17px] font-normal text-[#1C1C1C]"
              title="Login text"
            >
              Already have an account?{" "}
              <Link to="/" className="text-[19px]" title="Go to login page">
                Login
              </Link>
            </p>
            <hr className="flex-1" />
          </div>

          <div className="goofac" title="Social media signup options">
            <div className="gof" title="Sign up with Google">
              <img src={google} alt="Google Icon" />
              <p>Sign up with Google</p>
            </div>
            <div className="gof" title="Sign up with Facebook">
              <img src={facebook} alt="Facebook Icon" />
              <p>Sign up with Facebook</p>
            </div>
          </div>
        </div>

        <div className="w-[720px] h-[720px]" title="Decorative image">
          <img src={Image} alt="Decorative" className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

export default Signup;
