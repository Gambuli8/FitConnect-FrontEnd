/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  fetchSignInMethodsForEmail, // Add the fetchSignInMethodsForEmail import
} from "firebase/auth";
import { auth } from "../FireBase/firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoggedOut, setLoggedOut] = useState(false);

  const createUser = (email, password) => {
    setLoggedIn(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoggedIn(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    setLoggedIn(true);
    signInWithPopup(auth, provider);
  };

  const logout = () => {
    setLoggedIn(false);
    setLoggedOut(true);
    return signOut(auth);
  };

  const isEmailRegistered = async (email) => {
    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      return signInMethods.length > 0;
    } catch (error) {
      console.log(
        "An error occurred while checking email registration:",
        error
      );
      return false;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        createUser,
        user,
        logout,
        signIn,
        googleSignIn,
        isLoggedIn,
        isLoggedOut,
        isEmailRegistered,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
