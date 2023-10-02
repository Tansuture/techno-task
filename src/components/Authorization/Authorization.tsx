import React, { useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Users } from "../../types/types";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import SignInForm from "../SignInForm/SignInForm";
import PasswordRecoveryForm from "../PasswordRecoveryForm/PasswordRecoveryForm";

const Authorization = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [isPasswordForgot, setPasswordForgot] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const users = useSelector((state: RootState) => state.user);
  const registeredUser = users.find(
    (el: Users) => el.phoneNumber === phoneNumber
  );
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-violet-500">
        {isPasswordForgot ? (
          <div className="animate-fade-in">
            <PasswordRecoveryForm />
          </div>
        ) : isVisible || isSubmitted ? (
          <div className="animate-fade-out">
            <SignInForm
              data={{
                registeredUser,
                phoneNumber,
                setPasswordForgot,
                setPhoneNumber,
                setIsVisible,
              }}
            />
          </div>
        ) : (
          <div className="animate-fade-in">
            <RegistrationForm setIsSubmitted={setIsSubmitted} />
          </div>
        )}
      </div>
    </>
  );
};

export default Authorization;
