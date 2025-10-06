import React from "react";
import { Link } from "react-router-dom";
import Facebook from "../assets/faceboock.svg";
import Google from "../assets/gooogle.svg";

function SocialButton() {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
      <Link className="w-full h-12 sm:h-14 md:h-16 lg:h-[78px] bg-white shadow-md rounded-lg flex items-center justify-center transition gap-3 sm:gap-4 md:gap-5 hover:bg-[#f9f9f9]">
        <img
          src={Google}
          alt="google"
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
        />
        <p className="text-[#2e2e2e] text-sm sm:text-base font-medium">
          Login with Google
        </p>
      </Link>

      <Link className="w-full h-12 sm:h-14 md:h-16 lg:h-[78px] bg-white shadow-md rounded-lg flex items-center justify-center transition gap-3 sm:gap-4 md:gap-5 hover:bg-[#f9f9f9]">
        <img
          src={Facebook}
          alt="facebook"
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
        />
        <p className="text-[#2e2e2e] text-sm sm:text-base font-medium">
          Login with Facebook
        </p>
      </Link>

      <div className="flex items-center justify-center gap-3 sm:gap-4 w-full mt-2 sm:mt-3.5">
        <hr className="flex-grow border-[#cfcfcf]" />
        <p className="text-[#2e2e2e] text-sm sm:text-base">OR</p>
        <hr className="flex-grow border-[#cfcfcf]" />
      </div>
    </div>
  );
}

export default SocialButton;
