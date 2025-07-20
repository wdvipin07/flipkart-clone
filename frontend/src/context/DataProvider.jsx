// src/context/DataProvider.js
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext(null);
function DataProvider({ children }) {
  const [account, setAccount] = useState("");

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await axios.get("http://localhost:3000/auth/user", {
          withCredentials: true,
        });
        if (res.data?.user) {
          setAccount(res.data.user.username);
        }
      } catch (err) {
        // Not logged in, no action
      }
    };

    checkSession();
  }, []);

  return (
    <DataContext.Provider value={{ account, setAccount }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
