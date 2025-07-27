// src/context/DataProvider.js
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext(null);
function DataProvider({ children }) {
  const [account, setAccount] = useState("");

  // Always fetch user from backend
  const fetchUser = async () => {
    try {
      const API = import.meta.env.VITE_API_BASE_URL;
      const res = await axios.get(`${API}/api/users/auth/user`, {
        withCredentials: true,
      });
      if (res.data?.user) {
        setAccount(res.data.user.username);
      } else {
        setAccount("");
      }
    } catch {
      setAccount("");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <DataContext.Provider value={{ account, setAccount, fetchUser }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
