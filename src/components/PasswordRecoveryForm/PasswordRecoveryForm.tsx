import React, { useState } from "react";
import { InputMask } from "@react-input/mask";

const PasswordRecoveryForm = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  return (
    <div className="w-[400px] h-[400px] flex flex-col  text-yellow-300 font-mono		justify-center items-center rounded-2xl	  border-2  shadow-xl border-white-600">
      <h1 className="text-4xl	"> Сброс пароля</h1>
      <form className=" w-full p-4 space-y-4">
        <InputMask
          mask="+7(___) ___-__-__"
          replacement={{ _: /\d/ }}
          value={phoneNumber}
          className="inputClass"
          placeholder="+7(xxx)(xxx)(xx)(xx)"
        />
      </form>
      <button
        //   disabled={!isFormValid()}
        className="text-center w-[360px]  h-[50px] bg-slate-200	text-yellow-300 font-semibold"
        type="submit"
        //   onSubmit={handleSubmit}
      >
        Восстановить пароль
      </button>
    </div>
  );
};

export default PasswordRecoveryForm;
