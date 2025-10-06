import React from "react";
import Lignn from "../assets/Illustration.png";
import Signin from "../components/Signin";

function Login() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen w-full overflow-auto">
      <div className="min-h-screen flex items-center justify-center py-8 sm:py-12">
        <div className="px-4 w-full sm:px-6 flex items-center justify-center lg:gap-16 xl:gap-20 2xl:gap-28">
          <img
            src={Lignn}
            alt="login"
            className="hidden xl:block w-3/5 2xl:w-1/2 max-w-5xl"
          />
          <div className="w-full max-w-md mr-10 sm:max-w-lg lg:max-w-xl">
            <Signin />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
