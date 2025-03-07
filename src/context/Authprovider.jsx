import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStrorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const Authprovider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStrorage()
    const  employees= getLocalStorage();
    setUserData(employees);
  }, []);

  return (
    <AuthContext.Provider value={[userData,setUserData]}>
    {children}
    </AuthContext.Provider>
  );
};

export default Authprovider;
