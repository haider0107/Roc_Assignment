import React from "react";
import { useNavigate } from "react-router-dom";

function Navebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="flex bg-indigo-700 items-center justify-between">
      <div className="ml-4 text-white text-2xl font-bold">Tasky</div>
      <button
        onClick={() => logout()}
        className="px-4 py-2 m-2 bg-white rounded-xl font-medium"
      >
        Logout
      </button>
    </div>
  );
}

export default Navebar;
