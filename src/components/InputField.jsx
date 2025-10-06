import React, { useState } from "react";
import EmailIcon from "../assets/email.svg";
import EyeIcon from "../assets/eye.svg";
import PasswordIcon from "../assets/password.svg";

function InputField({
  emailValue,
  passwordValue,
  onEmailChange,
  onPasswordChange,
  onLogin,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin?.();
  };

  return (
    <form
      className="flex flex-col gap-4 sm:gap-6 md:gap-8"
      onSubmit={handleSubmit}
    >
      {/* Email Field */}
      <div className="relative w-full flex items-center bg-[#f5f5f5] rounded-md sm:rounded-lg">
        <img
          src={EmailIcon}
          alt="email"
          className="ml-3 sm:ml-4 w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 opacity-80 pointer-events-none"
        />

        <div className="relative flex-1">
          <input
            type="email"
            id="email"
            value={emailValue}
            onChange={onEmailChange}
            placeholder=" "
            required
            className="peer w-full bg-transparent py-4 sm:py-5 md:py-7 pl-3 sm:pl-4 pr-3 focus:outline-none text-base sm:text-lg md:text-[20px] text-[#2e2e2e] font-bold"
          />
          <label
            htmlFor="email"
            className="absolute left-2 top-1/2 -translate-y-1/2 text-[#2e2e2e] text-sm sm:text-base 
             transition-all duration-200 ease-out
             peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
             peer-focus:top-2 peer-focus:text-xs sm:peer-focus:text-sm px-1 font-medium"
          >
            Email
          </label>
        </div>
      </div>

      {/* Password Field */}
      <div className="relative w-full flex items-center bg-[#f5f5f5] rounded-md sm:rounded-lg">
        <img
          src={PasswordIcon}
          alt="password"
          className="ml-3 sm:ml-4 w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 opacity-80 pointer-events-none"
        />

        <div className="relative flex-1">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={passwordValue}
            onChange={onPasswordChange}
            placeholder=" "
            required
            className="peer w-full bg-transparent py-4 sm:py-5 md:py-7 pl-3 sm:pl-4 pr-10 sm:pr-12 focus:outline-none text-base sm:text-lg md:text-[20px] text-[#2e2e2e] font-bold"
          />
          <label
            htmlFor="password"
            className="absolute left-2 top-1/2 -translate-y-1/2 text-[#2e2e2e] text-sm sm:text-base 
             transition-all duration-200 ease-out
             peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
             peer-focus:top-2 peer-focus:text-xs sm:peer-focus:text-sm px-1 font-medium"
          >
            Password
          </label>
        </div>

        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 sm:right-4 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 opacity-70 cursor-pointer"
        >
          <img
            src={EyeIcon}
            alt={showPassword ? "Hide password" : "Show password"}
            className="w-full h-full"
          />
        </button>
      </div>

      {/* Remember Me & Forgot Password */}
      <div className="flex  xs:flex-row justify-between items-start xs:items-center gap-3 sm:gap-4">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            required
            onChange={(e) => setRememberMe(e.target.checked)}
            className="w-4 h-4 sm:w-5 sm:h-5 accent-[#6358db] cursor-pointer"
          />
          <label
            htmlFor="rememberMe"
            className="text-[#2e2e2e] text-sm sm:text-base font-medium cursor-pointer"
          >
            Remember me
          </label>
        </div>

        <button
          type="button"
          className="text-[#6358db] text-sm sm:text-base font-medium hover:underline whitespace-nowrap cursor-pointer "
        >
          Forgot Password?
        </button>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full bg-[#6358db] text-white py-3 sm:py-4 rounded-md text-lg sm:text-xl font-bold hover:bg-[#6358dbe1] cursor-pointer transition-colors duration-200"
      >
        Login
      </button>

      <div className="flex mt-4 sm:mt-6 md:mt-8 items-center justify-center font-medium">
        <p className="text-sm sm:text-base">
          Don't have an account?{" "}
          <a href="/" className="text-[#6358db] hover:underline">
            Register
          </a>
        </p>
      </div>
    </form>
  );
}

export default InputField;
