import React from "react";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500 ">
      <RegistrationForm />
    </div>
  );
}

export default App;
