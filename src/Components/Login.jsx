import React, { useState } from "react";
import Image from "../assets/img/Rectangle 4.svg";
import Sun from "../assets/img/Vector (1).png";
import imguser from "../assets/svg/usernamer.svg";
import password from "../assets/svg/password.svg";
import google from "../assets/svg/google 1.svg";
import facebook from "../assets/svg/facebook 1.svg";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState({ username: "", password: "" });
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
    const { username, password } = form;
    let formIsValid = true;
    let errorMessages = { username: "", password: "" };

    if (!username) {
      formIsValid = false;
      errorMessages.username = "Username is required";
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
      setError({ username: "", password: "" });
      navigate("/loading");
    }
  };

  return (
    <>
      <div title="Spacer div">
        <img src={Sun} alt="" className="sun" />
      </div>
      <div
        className="contentall w-[97%] flex m-auto justify-center h-[100%] items-center mt-6 gap-48"
        title="Main login container"
      >
        <div
          className="h-[660px] text-center w-[400px] items-center"
          title="Login section"
        >
          <div className="welcom" title="Welcome text">
            <h1
              className="text-[6rem] font-bold text-[#1C1C1C]"
              title="Welcome title"
            >
              Welcome
            </h1>
            <p
              className="text-[#1C1C1C] font-medium text-[20px]"
              title="Welcome subtitle"
            >
              We are glad to see you back with us
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="form mt-10 flex flex-col gap-4"
            title="Login form"
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
              className="bg-[#1C1C1C] button text-white w-[400px] items-center mt-4 rounded-[7px] h-[60px] cursor-pointer hover:bg-[#2b2b2b] shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 active:scale-95"
              title="Submit login form"
            >
              Next
            </button>
          </form>

          <div
            className="flex items-center justify-center space-x-2 mt-7"
            title="Register option"
          >
            <hr className="flex-1" />
            <p
              className="text-[17px] font-normal text-[#1C1C1C]"
              title="Register text"
            >
              Do you have an account?{" "}
              <Link
                to="/register"
                className="text-[19px]"
                title="Go to register page"
              >
                Register
              </Link>
            </p>
            <hr className="flex-1" />
          </div>

          <div className="goofac" title="Social media login options">
            <div className="gof" title="Login with Google">
              <img src={google} alt="Google Icon" />
              <p>Login with Google</p>
            </div>
            <div className="gof" title="Login with Facebook">
              <img src={facebook} alt="Facebook Icon" />
              <p>Login with Facebook</p>
            </div>
          </div>
        </div>

        <div className="w-[720px] h-[720px]" title="Decorative image">
          <img src={Image} alt="Image" className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

export default Login;
