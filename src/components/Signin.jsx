import React from "react";
import InputField from "./InputField";
import SocialButton from "./SocialButton";

function Signin() {
  return (
    <div className="bg-white w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:w-[788px] h-auto sm:h-[800px] md:h-[900px] lg:h-[940px] shadow-lg rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16 flex flex-col gap-4 sm:gap-6 lg:gap-7">
      <h1 className="text-xl sm:text-2xl font-medium text-[#2e2e2e]">
        Welcome to <br />
        <span className="text-[#6358db] text-2xl sm:text-3xl lg:text-[2rem] font-black">
          Design School{" "}
        </span>
      </h1>
      <SocialButton />
      <InputField />
    </div>
  );
}

export default Signin;
