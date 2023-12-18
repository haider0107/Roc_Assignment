import React from "react";
import { Link } from "react-router-dom";

function Navebar() {
  return (
    <div className="flex bg-indigo-700 items-center justify-between">
      <div className="ml-4 text-white text-2xl font-bold">Tasky</div>
      <button className="px-4 py-2 m-2 bg-white rounded-xl font-medium">Logout</button>
    </div>
  );
}

export default Navebar;
