import React from "react";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (error) {
      console.log(e.message);
    }
  };
  return (
    <div className="bg-black max-w-[600px] mx-auto my-16 p-4">
      <h1 className="text-2xl font-bold py-4 text-white">Account</h1>
      <p className="text-white">✉️ User email: {user && user.email} </p>
      <button
        onClick={handleLogOut}
        className="text-black border px-6 py-2 my-4 bg-white"
      >
        Logout 🔙
      </button>
    </div>
  );
};

export default Account;
