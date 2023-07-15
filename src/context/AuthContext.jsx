/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
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

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsuscribe();
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};
