import { InputMask } from "@react-input/mask";
import React, { useState, FC } from "react";
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
  const {
    phoneNumber,
    setPhoneNumber,
    registeredUser,
    setIsVisible,
    setPasswordForgot,
  } = data;

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!registeredUser) {
      setIsVisible(false);
    }
  };

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
        {registeredUser && (
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
      {registeredUser && (
        <p onClick={() => setPasswordForgot(true)}>Забыли пароль?</p>
      )}
      <button
        disabled={!phoneNumber}
        className={`text-center text-2xl  w-[360px] h-[50px] rounded-full  font-display font-semibold ${
          phoneNumber
            ? "bg-slate-200 text-slate-500"
            : "bg-gray-400 text-gray-600 cursor-not-allowed"
        }`}
        type="submit"
        onClick={handleSubmit}
      >
        Sign In
      </button>
    </div>
  );
};

export default SignInForm;
