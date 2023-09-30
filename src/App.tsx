import React from "react";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import PasswordRecoveryForm from "./components/PasswordRecoveryForm/PasswordRecoveryForm";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500 ">
      <RegistrationForm />
      {/* <PasswordRecoveryForm /> */}
    </div>
  );
}

export default App;
