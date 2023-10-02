import React, { useState, useEffect } from "react";
import { InputMask } from "@react-input/mask";

const PasswordRecoveryForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);
  useEffect(() => {
    setValidPhoneNumber(phoneNumber.match(/\d/g)?.length === 11);
  }, [phoneNumber]);
  return (
    <div className="w-[400px] h-[400px] flex flex-col  text-yellow-300 font-mono		justify-center items-center rounded-2xl	  border-2  shadow-xl border-white-600">
      <h1 className="text-4xl font-display	">forgot password</h1>
      <form className=" w-full p-4 space-y-4">
        <InputMask
          mask="+7(___) ___-__-__"
          replacement={{ _: /\d/ }}
          value={phoneNumber}
          className="inputClass"
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="+7(xxx)(xxx)(xx)(xx)"
        />
      </form>
      <button
        className={`text-center text-2xl  w-[360px] h-[50px] rounded-full  font-display font-semibold ${
          validPhoneNumber
            ? "bg-slate-200 text-slate-500"
            : "bg-gray-400 text-gray-600 cursor-not-allowed"
        }`}
        disabled={validPhoneNumber}
        type="submit"
        //   onSubmit={handleSubmit}
      >
        restore
      </button>
    </div>
  );
};

export default PasswordRecoveryForm;
