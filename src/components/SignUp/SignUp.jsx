import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { createUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
    } catch (error) {
      navigate("/account");
      setError(error.message);
      console.log(error.message);
    }
  };
  return (
    <div className="bg-black max-w-[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2 text-white">
          Sign up your account!
        </h1>{" "}
        <p className="text-white">
          Already have an account?{" "}
          <Link className="underline text-white" to={"/signin"}>
            Sign in!
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col py-2 text-white">
          <label className="py-2 font-medium">Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 text-black"
            type="email"
          ></input>
        </div>
        <div className="flex flex-col py-2 text-white">
          <label className="py-2 font-medium">Enter Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3 text-black"
            type="password"
          ></input>
        </div>
        <button
          className="border border-yellow-500 bg-yellow-400 hover:bg-yellow-500 text-black py-4 my-2 w-full"
          type="submit"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
