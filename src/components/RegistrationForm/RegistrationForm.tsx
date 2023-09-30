import { InputMask } from "@react-input/mask";
import React from "react";

const RegistrationForm = () => {
  return (
    <div className="w-[400px] h-[400px] flex flex-col  text-yellow-300 font-mono		justify-center items-center rounded-2xl	  border-2  shadow-xl border-white-600">
      <h1 className="text-4xl	"> Регистрация</h1>
      <form className=" w-full p-4 space-y-4">
        <span>
          <input
            type="text"
            placeholder="имя"
            className="inputClass"
            required
          />
        </span>
        <InputMask
          mask="+7(___) ___-__-__"
          replacement={{ _: /\d/ }}
          className="inputClass"
          placeholder="+7(xxx)(xxx)(xx)(xx)"
        />
        <input
          type="email"
          placeholder="email"
          className="inputClass"
          required
        />

        <input
          type="password"
          placeholder="password"
          required
          className="inputClass"
        />
      </form>
      <button
        className="text-center w-[360px]  h-[50px] bg-white text-yellow-300 font-semibold"
        type="submit"
      >
        Зарегистрироваться
      </button>

      <span>
        <input type="checkbox" />
        <label htmlFor="checkbox"> ok</label>
      </span>
    </div>
  );
};

export default RegistrationForm;
