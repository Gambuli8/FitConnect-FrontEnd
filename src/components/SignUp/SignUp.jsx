import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { googleSignIn } = UserAuth();
  const navigate = useNavigate();
  const { createUser } = UserAuth();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/");
    } catch (error) {
      if (error.message.includes("email already in use")) {
        setError("Email is already in use");
      } else {
        setError(error.message);
      }
      console.log(error.message);
    }
  };

  const isDisabled = error !== ""; // Disable the button if there is an error message

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
            required
          ></input>
        </div>
        <div className="flex flex-col py-2 text-white">
          <label className="py-2 font-medium">Enter Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3 text-black"
            type="password"
            required
          ></input>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="border border-yellow-500 bg-yellow-400 hover:bg-yellow-500 text-black py-4 my-2 w-full"
          type="submit"
          disabled={isDisabled} // Disable the button if there is an error message
        >
          Sign up
        </button>
        <button
          onClick={handleGoogleSignIn}
          type="button"
          className="py-2 px-4 flex justify-center items-center bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
        >
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="mr-2"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
          </svg>
          Sign up with Google
        </button>
      </form>
    </div>
  );
};

export default SignUp;
