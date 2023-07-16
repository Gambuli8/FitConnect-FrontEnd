import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailInUse, setEmailInUse] = useState(false); // New state for email in use
  const navigate = useNavigate();
  const { createUser, isEmailRegistered } = UserAuth();

  useEffect(() => {
    const checkEmailInUse = async () => {
      try {
        const isRegistered = await isEmailRegistered(email);
        setEmailInUse(isRegistered);
      } catch (error) {
        console.log(
          "An error occurred while checking email registration:",
          error
        );
      }
    };

    if (email !== "") {
      checkEmailInUse();
    }
  }, [email, isEmailRegistered]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (emailInUse) {
        setError("Email is already in use");
        return;
      }

      await createUser(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  const isDisabled = error !== "" || emailInUse; // Update disabled condition

  return (
    <div className="bg-black max-w-[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2 text-white">
          Sign up your account!
        </h1>
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
          />
        </div>
        <div className="flex flex-col py-2 text-white">
          <label className="py-2 font-medium">Enter Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3 text-black"
            type="password"
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {emailInUse && <p className="text-red-500">Email is already in use</p>}
        <button
          className="border border-yellow-500 bg-yellow-400 hover:bg-yellow-500 text-black py-4 my-2 w-full"
          type="submit"
          disabled={isDisabled}
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
