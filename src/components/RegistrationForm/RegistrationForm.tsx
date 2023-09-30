import React from "react";

const RegistrationForm = () => {
  return (
    <div className="w-[400px] h-[400px] flex flex-col  text-yellow-300 font-mono		justify-center items-center rounded-2xl	  border-2  shadow-lg border-white-600">
      <h1 className="text-4xl	"> Регистрация</h1>
      <form className=" w-full p-4 space-y-4">
        <span><input type="text" placeholder="имя" className="inputClass" required /></span>
        <input
          type="number"
          placeholder="number"
          className="inputClass"
          required
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
      <div className=" flex  justify-center items-center ">
        <span>
          <input type="checkbox" />
          <label htmlFor="checkbox"> ok</label>
        </span>
        <button type="submit"> отправить</button>
      </div>
    </div>
  );
};

export default RegistrationForm;
