import React, { FormEvent, useState } from "react";
import { ErrorResponse, Link, useNavigate } from "react-router-dom";
const baseURL = "http://localhost:4000/auth";

const Login = () => {
  const navigate = useNavigate();
  const [password, setpwd] = useState("");
  const [username, setname] = useState("");
  const handlesubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetch(`${baseURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      type user = {
        _id: string;
        username: string;
        email: string;
      };
      const result: Promise<user> = await response.json();
      localStorage.setItem("user", JSON.stringify({ result }));

      navigate("/tasks");
    } else {
      const err: { errors: any } = await response.json();
      const usernameErrElement = document.getElementById("usernameError");
      const passwdErrElement = document.getElementById("passwordError");

      if (usernameErrElement) usernameErrElement.innerHTML = "";
      if (passwdErrElement) passwdErrElement.innerHTML = "";

      if (usernameErrElement && err.errors.username) {
        usernameErrElement.innerHTML = err.errors.username;
      }
      if (passwdErrElement && err.errors.password) {
        passwdErrElement.innerHTML = err.errors.password;
      }
    }
  };
  return (
    <>
      <section className="flex justify-center items-center">
        <form
          className="bg-gray-200 pr-8 pl-8 p-4 mt-20 flex flex-col justify-center items-center rounded-xl"
          onSubmit={handlesubmit}
        >
          <h2 className="font-bold text-xl mb-10">Login</h2>

          <div className="mb-4 flex items-center space-x-4">
            <label htmlFor="username" className="text-sm w-24 text-right">
              Username:
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setname(e.target.value);
              }}
              id="username"
              name="username"
              className="h-8 w-60 rounded-xl focus:outline-none pl-2"
            />
          </div>

          <p id="usernameError" className="font-bold text-red-500"></p>

          <div className="mb-4 flex items-center space-x-4">
            <label htmlFor="password" className="text-sm w-24 text-right">
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setpwd(e.target.value);
              }}
              id="password"
              name="password"
              className="h-8 w-60 rounded-xl focus:outline-none pl-2"
            />
          </div>

          <p id="passwordError" className="font-bold text-red-500"></p>

          <div className="flex flex-row space-x-4 items-center">
            <button
              type="submit"
              className="bg-gray-500 h-8 w-24 text-sm rounded-xl hover:opacity-70 mt-4"
            >
              Login
            </button>
            <p className="mt-2 text-sm text-gray-600">
              don't have an account{" "}
              <Link to="/signup" className="text-blue-500 underline ">
                signup
              </Link>
            </p>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
