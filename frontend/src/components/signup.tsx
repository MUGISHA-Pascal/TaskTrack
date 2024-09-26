import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const baseURL = "http://localhost:4000/auth";

interface ErrorResponse {
  message?: string;
  code?: number;
  details?: Record<string, any>;
  errors: {
    username?: string;
    email?: string;
    password?: string;
  };
}

const Signup = () => {
  const [password, setpwd] = useState("");
  const [username, setname] = useState("");
  const [email, setemail] = useState("");

  const navigate = useNavigate();

  const handlesubmit = async (e: FormEvent) => {
    e.preventDefault();

    const usernameErrElement = document.getElementById("usernameError");
    const emailErrElement = document.getElementById("emailError");
    const passwdErrElement = document.getElementById("passwordError");

    if (usernameErrElement) usernameErrElement.innerHTML = "";
    if (emailErrElement) emailErrElement.innerHTML = "";
    if (passwdErrElement) passwdErrElement.innerHTML = "";

    const response = await fetch(`${baseURL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
      type user = {
        _id: string;
        username: string;
        email: string;
      };
      const result: Promise<user> = await response.json();
      localStorage.setItem("user", JSON.stringify({ result }));
      navigate("/login");
    } else {
      const errRes: ErrorResponse = await response.json();

      if (usernameErrElement && errRes.errors.username) {
        usernameErrElement.innerHTML = errRes.errors.username;
      }

      if (emailErrElement && errRes.errors.email) {
        emailErrElement.innerHTML = errRes.errors.email;
      }

      if (passwdErrElement && errRes.errors.password) {
        passwdErrElement.innerHTML = errRes.errors.password;
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
          <h2 className="font-bold text-xl mb-10">Signup</h2>

          <div className="mb-4 flex items-center space-x-4">
            <label htmlFor="username" className="text-sm w-24 text-right">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => {
                setname(e.target.value);
              }}
              className="h-8 w-60 rounded-xl focus:outline-none pl-2"
            />
          </div>
          <p id="usernameError" className="font-bold text-red-500"></p>

          <div className="mb-4 flex items-center space-x-4">
            <label htmlFor="email" className="text-sm w-24 text-right">
              Email:
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              id="email"
              name="email"
              className="h-8 w-60 rounded-xl focus:outline-none pl-2"
            />
          </div>
          <p id="emailError" className="font-bold text-red-500"></p>

          <div className="mb-4 flex items-center space-x-4">
            <label htmlFor="password" className="text-sm w-24 text-right">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setpwd(e.target.value);
              }}
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
              signup
            </button>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account{" "}
              <Link to="/login" className="text-blue-500 underline ">
                login
              </Link>
            </p>
          </div>
        </form>
      </section>
    </>
  );
};

export default Signup;
