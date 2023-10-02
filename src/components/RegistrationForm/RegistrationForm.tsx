import { InputMask } from "@react-input/mask";
import React, { useState, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/usersSlice";
import { RootState } from "../../redux/store";
import { Users } from "../../types/types";
interface Props {
  setIsSubmitted: (value: boolean) => void;
}
const RegistrationForm: FC<Props> = ({ setIsSubmitted }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    isChecked: false,
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    isChecked: "",
  });
  const dispatch = useDispatch();
  const users: Users[] = useSelector((state: RootState) => state.user);

  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    setValues({
      ...values,
      [name]: type === "checkbox" ? checked : value,
    });
    handleValidationMessage();
  };
  const handleValidationMessage = () => {
    const { name, phoneNumber, email, password, isChecked } = values;

    const newErrors = {
      name: name.trim() === "" ? "Имя обязательно" : "",

      email: !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)
        ? "Неправильный формат email"
        : "",
      password:
        password.length < 8 ? "Пароль должен содержать минимум 8 символов" : "",
      isChecked: !isChecked ? "" : ".Вы должны согласиться",
    };

    setErrors(() => newErrors);
  };

  const isEmptyForm = () => {
    return (
      values.name !== "" &&
      values.phoneNumber !== "" &&
      values.email !== "" &&
      values.password !== "" &&
      values.isChecked
    );
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const user = {
      name: values.name,
      phoneNumber: values.phoneNumber,
      email: values.email,
      password: values.password,
    };

    dispatch(addUser(user));
    const updatedUsers = [...users, user];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setValues({
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      isChecked: false,
    });
    setIsSubmitted(true);
  };

  return (
    <div className="w-[450px] h-[480px] flex flex-col text-yellow-300 font-mono p-5 justify-center items-center rounded-2xl border-2 shadow-xl border-white-600">
      <h1 className="text-5xl font-display">SIGN UP</h1>
      <form className="w-full p-4 space-y-4">
        <span>
          <input
            onChange={handleInputChange}
            value={values.name}
            type="text"
            placeholder="имя"
            className="inputClass"
            required
            name="name"
          />
          <span className="text-500 text-sm">{errors.name}</span>
        </span>
        <InputMask
          mask="+7(___) ___-__-__"
          replacement={{ _: /\d/ }}
          value={values.phoneNumber}
          onChange={handleInputChange}
          className="inputClass"
          placeholder="+7(xxx)(xxx)(xx)(xx)"
          name="phoneNumber"
        />
        <input
          type="email"
          placeholder="email"
          value={values.email}
          onChange={handleInputChange}
          className="inputClass"
          required
          name="email"
        />
        <span className="text-500 text-sm">{errors.email}</span>
        <input
          type="password"
          placeholder="пароль"
          value={values.password}
          required
          onChange={handleInputChange}
          className="inputClass"
          name="password"
        />
        <span className="text-500 text-sm">{errors.password}</span>
      </form>
      <button
        className={`text-center text-2xl  w-[360px] h-[50px] rounded-full  font-display font-semibold ${
          isEmptyForm()
            ? "bg-slate-200 text-slate-500"
            : "bg-gray-400 text-gray-600 cursor-not-allowed"
        }`}
        type="submit"
        disabled={!isEmptyForm()}
        onClick={handleSubmit}
      >
        Sign up
      </button>
      <span className="self-start">
        <input
          type="checkbox"
          checked={values.isChecked}
          onChange={handleInputChange}
          name="isChecked"
        />
        <label htmlFor="checkbox"> ok</label>
        <span className="text-500 text-sm">{errors.isChecked}</span>
      </span>
    </div>
  );
};

export default RegistrationForm;
