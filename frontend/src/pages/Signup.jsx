import React, { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    try {
        e.preventDefault();
        console.log(email,name,password);
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div class="flex justify-center items-center h-screen bg-indigo-600">
      <div class="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 class="text-3xl block text-center font-semibold">
          <i></i> Register
        </h1>
        {/* <hr class="mt-3"> */}
        <form onSubmit={handleSignup}>
        <div class="mt-3">
            <label for="username" class="block text-base mb-2">
              Name
            </label>
            <input
              type="text"
              id="username"
              class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Username..."
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="mt-3">
            <label for="username" class="block text-base mb-2">
              Email
            </label>
            <input
              type="text"
              id="username"
              class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Username..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="mt-3">
            <label for="password" class="block text-base mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="mt-3 flex justify-between items-center"></div>
          <div class="mt-5">
            <button
              type="submit"
              class="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"
            >
              <i class="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Login
            </button>
          </div>
        </form>
        <div className="mt-4 text-indigo-600 hover:text-indigo-800 text-center">
          <a href="/register">Don't have an account ?</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
