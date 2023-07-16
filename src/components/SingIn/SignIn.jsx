import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const SignIn = () => {
  const { signIn, isEmailRegistered } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please enter your email and password");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true); // Actualizamos el estado a "true" mientras se está realizando el inicio de sesión

    const emailRegistered = await isEmailRegistered(email);
    if (!emailRegistered) {
      setError("Email is not registered");
      setIsSubmitting(false); // Restablecemos el estado a "false" si el correo electrónico no está registrado
      return;
    }

    try {
      await signIn(email, password);
      navigate("/");
    } catch (error) {
      setError("Invalid email or password");
      console.log(error.message);
    }

    setIsSubmitting(false); // Restablecemos el estado a "false" una vez que se haya completado el inicio de sesión
  };

  const isDisabled = !email || !password || isSubmitting;

  const handleDisabledClick = () => {
    if (isDisabled) {
      setError("Please complete all the required fields.");
    }
  };

  return (
    <div>
      <div className="bg-black max-w-[700px] mx-auto my-16 p-4">
        <div>
          <h1 className="text-2xl font-bold py-2 text-white">
            Sign in to your account!
          </h1>
          <p className="text-white">
            Don't have an account yet?{" "}
            <Link className="underline text-white" to={"/signup"}>
              Sign up!
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
            {error && <p className="text-red-500">{error}</p>}
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
            className="py-2 px-4 flex w-full mb-1 items-center justify-center bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-600 focus:ring-offset-yellow-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            type="submit"
            disabled={isDisabled}
            onClick={handleDisabledClick}
          >
            Sign in with Email
          </button>
          <button
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
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
