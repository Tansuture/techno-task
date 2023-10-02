import { InputMask } from "@react-input/mask";
import React, { useState, FC, useEffect } from "react";
import { Users } from "../../types/types";

interface Props {
  data: {
    registeredUser: Users;
    setIsVisible: (value: boolean) => void;
    setPasswordForgot: (value: boolean) => void;
    phoneNumber: string;
    setPhoneNumber: (value: string) => void;
  };
}
const SignInForm: FC<Props> = ({ data }) => {
  const [password, setPassword] = useState("");
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    phoneNumber,
    setPhoneNumber,
    registeredUser,
    setIsVisible,
    setPasswordForgot,
  } = data;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitted(() => true);
    if (!registeredUser) {
      setIsVisible(false);
    }
    setPhoneNumber("");
  };
  const handleSubmitPass = (e: any) => {
    e.preventDefault();
    setIsSubmitted(() => true);
  };
  const validatePassword = (input: string) => {
    return input.length >= 8;
  };

  useEffect(() => {
    setValidPhoneNumber(phoneNumber.match(/\d/g)?.length === 11);
  }, [phoneNumber]);

  return (
    <div className="`w-[450px] h-[450px] flex flex-col text-yellow-300 font-mono p-5 justify-center items-center rounded-2xl border-2 shadow-xl border-white-600">
      <h1 className="text-5xl font-display"> Sign in</h1>
      <form className=" w-full p-4 space-y-4" onSubmit={handleSubmit}>
        <InputMask
          mask="+7(___) ___-__-__"
          replacement={{ _: /\d/ }}
          value={phoneNumber}
          className="inputClass"
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="+7(xxx)(xxx)(xx)(xx)"
        />
        {isSubmitted && (
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="inputClass"
            name="password"
          />
        )}
      </form>
      {isSubmitted && (
        <p className="underline p-2" onClick={() => setPasswordForgot(true)}>
          Забыли пароль?
        </p>
      )}
      {isSubmitted && registeredUser ? (
        <button
          disabled={validatePassword(password)}
          className={`text-center text-2xl  w-[360px] h-[50px] rounded-full  font-display font-semibold ${
            validatePassword(password)
              ? "bg-slate-200 text-slate-500"
              : "bg-gray-400 text-gray-600 cursor-not-allowed"
          }  `}
          type="submit"
          onClick={handleSubmitPass}
        >
          sedonc
        </button>
      ) : (
        <button
          disabled={!validPhoneNumber}
          className={`text-center text-2xl  w-[360px] h-[50px] rounded-full  font-display font-semibold ${
            validPhoneNumber
              ? "bg-slate-200 text-slate-500"
              : "bg-gray-400 text-gray-600 cursor-not-allowed"
          } `}
          type="submit"
          onClick={handleSubmit}
        >
          Sign In
        </button>
      )}

      {/* {!registeredUser ? (
        <button
          disabled={!validPhoneNumber}
          className={`text-center text-2xl  w-[360px] h-[50px] rounded-full  font-display font-semibold ${
            validPhoneNumber
              ? "bg-slate-200 text-slate-500"
              : "bg-gray-400 text-gray-600 cursor-not-allowed"
          } `}
          type="submit"
          onClick={handleSubmit}
        >
          Sign In
        </button>
      ) : (
        <button
          disabled={validatePassword(password)}
          className={`text-center text-2xl  w-[360px] h-[50px] rounded-full  font-display font-semibold ${
            validatePassword(password)
              ? "bg-slate-200 text-slate-500"
              : "bg-gray-400 text-gray-600 cursor-not-allowed"
          }  `}
          type="submit"
          onClick={handleSubmitPass}
        >
          sedonc
        </button>
      )} */}
    </div>
  );
};

export default SignInForm;
