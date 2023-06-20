import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/Firebase";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthenticationContext = ({ children }) => {
  const auth = getAuth(app);

  const crateUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const info = { crateUserWithEmail };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthenticationContext;
