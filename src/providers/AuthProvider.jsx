/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";

// create context
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  //   create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   sign in user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //  sign out user
  const logOut = () => {
    return signOut(auth);
  };

  //    observing current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(
      auth,
      (currentUSer) => {
        setUser(currentUSer);
        setLoading(false);
        console.log("current user: ", currentUSer);
      },
      (error) => {
        console.error("Error observing auth state:", error);
        setLoading(false);
      }
    );
    return () => {
      unSubscribe();
    };
  }, []);

  //   passing value
  const authInfo = { user, loading, createUser, loginUser, logOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
