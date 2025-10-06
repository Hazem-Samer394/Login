import React from "react";
import Lignn from "../assets/Illustration.png";
import Signin from "../components/Signin";

function Login() {
  return (
    <div className="px-4 sm:px-6 py-4 sm:py-7 bg-[#f5f5f5] min-h-screen flex items-center justify-center lg:gap-16 xl:gap-20 2xl:gap-28">
      <img
        src={Lignn}
        alt="login"
        className="w-3/5 md:w-3/5 lg:w-3/5 xl:w-3/5 2xl:w-1/2 max-w-5xl hidden lg:block"
      />
      <Signin />
    </div>
  );
}

export default Login;
